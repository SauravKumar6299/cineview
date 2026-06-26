// src/Common/utils/FormatDate.utils.ts
export const formatDate = (
    value: string | number | Date | null | undefined,
    locale: string,
    options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' },
  ): string => {
    if (!value) return ''
    const date = value instanceof Date ? value : new Date(value)
    if (Number.isNaN(date.getTime())) return ''
    return new Intl.DateTimeFormat(locale, options).format(date)
  }