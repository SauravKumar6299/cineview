import { createContext, useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
  AUTH_CREDENTIALS,
  INVALID_CREDENTIALS_MESSAGE,
} from '../../core/constants/Auth.constants'
import type {
  AuthContextValue,
  Credentials,
  LoginResult,
  Session,
} from '../../core/types/Auth.types'
import { clearSession, readSession, writeSession } from '../services/Session.services'

export const AuthContext = createContext<AuthContextValue | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Session | null>(() => readSession())

  const login = useCallback((credentials: Credentials): LoginResult => {
    const isValid =
      credentials.email === AUTH_CREDENTIALS.email &&
      credentials.password === AUTH_CREDENTIALS.password
    if (!isValid) return { success: false, error: INVALID_CREDENTIALS_MESSAGE }

    const session: Session = {
      email: credentials.email,
      token: crypto.randomUUID(),
      issuedAt: Date.now(),
    }
    writeSession(session)
    setUser(session)
    return { success: true }
  }, [])

  const logout = useCallback(() => {
    clearSession()
    setUser(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({ isAuthenticated: user !== null, user, login, logout }),
    [user, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}