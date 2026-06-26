// src/i18n.ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { authEn, authEs } from './Auth'
import { commonEn, commonEs } from './Common'
import { moviesEn, moviesEs } from './Movies'
import { searchEn, searchEs } from './Search'
import { settingsEn, settingsEs } from './Preferences'
import { tvEn, tvEs } from './TVShows'
import { readPreferences } from './Preferences/data/persistence/Preferences.persistence'

export const defaultNS = 'common'

export const resources = {
  en: { common: commonEn, auth: authEn, movies: moviesEn, tvShows: tvEn, search: searchEn, settings: settingsEn },
  es: { common: commonEs, auth: authEs, movies: moviesEs, tvShows: tvEs, search: searchEs, settings: settingsEs },
} as const

void i18n.use(initReactI18next).init({
  resources,
  lng: readPreferences()?.language ?? 'en', // no flash: start in the persisted language
  fallbackLng: 'en',
  defaultNS,
  ns: ['common', 'auth', 'movies', 'tvShows', 'search', 'settings'],
  interpolation: { escapeValue: false }, // React already escapes
  returnNull: false,
})

export default i18n