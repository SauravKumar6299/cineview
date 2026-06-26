import { createContext } from 'react'
import type { AuthContextValue } from '../../core/types/Auth.types'

export const AuthContext = createContext<AuthContextValue | null>(null)