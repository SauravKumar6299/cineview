export { default as PagePlaceholder } from './ui/components/PagePlaceholder'
export { default as Button } from './ui/components/Button'
export { default as TextInput } from './ui/components/TextInput'
export { default as Navbar } from './ui/components/Navbar'
export { default as AppLayout } from './ui/components/AppLayout'
export { default as Spinner } from './ui/components/Spinner'
export { default as ErrorState } from './ui/components/ErrorState'
export { default as EmptyState } from './ui/components/EmptyState'
export { default as Image } from './ui/components/Image'
export { default as ErrorBoundary } from './ui/components/ErrorBoundary'
export { default as ContentRow } from './ui/components/ContentRow'
export { default as RatingBadge } from './ui/components/RatingBadge'
export { useDebounce } from './ui/hooks/useDebounce'
export { tmdbGet, TmdbApiError } from './data/api/HttpClient'
export { default as Modal } from './ui/components/Modal'
export { default as CastCard } from './ui/components/CastCard'
export { default as TrailerModal } from './ui/components/TrailerModal'
export type { QueryParams } from './data/api/HttpClient'
export { buildImageUrl } from './utils/BuildImageUrl.utils'
export { useTmdbQuery } from './ui/hooks/useTmdbQuery'
export type { QueryStatus } from './ui/hooks/useTmdbQuery'
export { TMDB_IMAGE_SIZES } from './core/constants/Tmdb.constants'
export {
    setRequestLanguage,
    setRequestRegion,
    getRequestLanguage,
    getRequestRegion,
  } from './data/api/requestContext'

// src/Common/index.ts
export { commonEn } from './i18n/en'
export { commonEs } from './i18n/es'
export { formatDate } from './utils/FormatDate.utils.ts'

