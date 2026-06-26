let currentLanguage = 'en-US'
let currentRegion = 'US'

export const setRequestLanguage = (language: string): void => {
  currentLanguage = language
}

export const setRequestRegion = (region: string): void => {
  currentRegion = region
}

export const getRequestLanguage = (): string => currentLanguage
export const getRequestRegion = (): string => currentRegion