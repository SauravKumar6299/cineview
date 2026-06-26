import i18n from 'i18next'
import { makeAutoObservable, reaction } from 'mobx'
import { setRequestLanguage, setRequestRegion } from '../../../Common'
import {
  DEFAULT_LANGUAGE,
  DEFAULT_REGION,
  LANGUAGES,
} from '../../core/constants/Preferences.constants'


import type { LanguageCode, RegionCode, Theme } from '../../core/types/Preferences.types'
import { readPreferences, writePreferences } from '../persistence/Preferences.persistence'

const getSystemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const toTmdbLanguage = (code: LanguageCode): string =>
  LANGUAGES.find((language) => language.code === code)?.tmdb ?? 'en-US'

export class PreferencesStore {
  language: LanguageCode
  theme: Theme
  region: RegionCode

  constructor() {
    const persisted = readPreferences()
    this.language = persisted?.language ?? DEFAULT_LANGUAGE
    this.theme = persisted?.theme ?? getSystemTheme()
    this.region = persisted?.region ?? DEFAULT_REGION

    makeAutoObservable(this, {}, { autoBind: true })

    this.sync()
    reaction(
      () => ({ language: this.language, theme: this.theme, region: this.region }),
      () => this.sync(),
    )
  }

  get tmdbLanguage(): string {
    return toTmdbLanguage(this.language)
  }

  setLanguage(language: LanguageCode) {
    this.language = language
  }

  setRegion(region: RegionCode) {
    this.region = region
  }

  setTheme(theme: Theme) {
    this.theme = theme
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark'
  }

  private sync() {
    writePreferences({ language: this.language, theme: this.theme, region: this.region })
    document.documentElement.dataset.theme = this.theme
    void i18n.changeLanguage(this.language)
    setRequestLanguage(this.tmdbLanguage)
    setRequestRegion(this.region)
  }
}