// src/Preferences/ui/hooks/useFormatDate.ts
import { useCallback } from 'react'
import { formatDate } from '../../../Common'
import { usePreferences } from '../../data/store/usePreferences'

export const useFormatDate = () => {
  const preferences = usePreferences()
  const locale = preferences.tmdbLanguage // 'en-US' | 'es-ES' — valid BCP-47
  return useCallback(
    (value: string | number | Date | null | undefined, options?: Intl.DateTimeFormatOptions) =>
      formatDate(value, locale, options),
    [locale],
  )
}