export { default as SettingsPage } from './ui/pages/SettingsPage'
export { PreferencesProvider } from './data/store/PreferencesProvider'
export { usePreferences } from './data/store/usePreferences'
export { LANGUAGES, REGIONS } from './core/constants/Preferences.constants'
export type { LanguageCode, RegionCode, Theme } from './core/types/Preferences.types'

// src/Preferences/index.ts
export { settingsEn } from './i18n/en'
export { settingsEs } from './i18n/es'
export { useFormatDate } from './ui/hooks/useFormatDate.ts'