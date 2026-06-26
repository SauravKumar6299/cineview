export type Theme = 'light' | 'dark'
export type LanguageCode = 'en' | 'es'
export type RegionCode = 'US' | 'IN' | 'GB'

export interface Preferences {
  language: LanguageCode
  theme: Theme
  region: RegionCode
}