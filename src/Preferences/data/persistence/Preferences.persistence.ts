import { PREFERENCES_STORAGE_KEY } from '../../core/constants/Preferences.constants'
import type { Preferences } from '../../core/types/Preferences.types'
import { preferencesSchema } from '../schemas/Preferences.schemas'

export const readPreferences = (): Preferences | null => {
  const raw = localStorage.getItem(PREFERENCES_STORAGE_KEY)
  if (!raw) return null
  try {
    const parsed = preferencesSchema.safeParse(JSON.parse(raw))
    return parsed.success ? parsed.data : null
  } catch {
    return null
  }
}

export const writePreferences = (preferences: Preferences): void => {
  localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(preferences))
}