import type { LanguageCode, RegionCode } from '../types/Preferences.types'

export const LANGUAGES: ReadonlyArray<{ code: LanguageCode; label: string; tmdb: string }> = [
  { code: 'en', label: 'English (US)', tmdb: 'en-US' },
  { code: 'es', label: 'Español', tmdb: 'es-ES' },
]

export const REGIONS: ReadonlyArray<{ code: RegionCode; label: string }> = [
  { code: 'US', label: 'United States' },
  { code: 'IN', label: 'India' },
  { code: 'GB', label: 'United Kingdom' },
]

export const DEFAULT_LANGUAGE: LanguageCode = 'en'
export const DEFAULT_REGION: RegionCode = 'US'
export const PREFERENCES_STORAGE_KEY = 'cineview.preferences'