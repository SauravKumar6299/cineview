import { SESSION_STORAGE_KEY } from '../../core/constants/Auth.constants'
import type { Session } from '../../core/types/Auth.types'
import { sessionSchema } from '../schemas/Auth.schemas'

export const readSession = (): Session | null => {
  const raw = sessionStorage.getItem(SESSION_STORAGE_KEY)
  if (!raw) return null
  try {
    const parsed = sessionSchema.safeParse(JSON.parse(raw))
    return parsed.success ? parsed.data : null
  } catch {
    return null
  }
}

export const writeSession = (session: Session): void => {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session))
}

export const clearSession = (): void => {
  sessionStorage.removeItem(SESSION_STORAGE_KEY)
}