export { default as ListDetailPage } from './ui/pages/ListDetailPage'
export { default as ListsPage } from './ui/pages/ListsPage'
export { default as WatchlistPage } from './ui/pages/WatchlistPage' 
export { collectionEn } from './i18n/en'
export { collectionEs } from './i18n/es'
export { CollectionProvider } from './data/store/CollectionProvider'
export { useCollection } from './data/store/useCollection'
export { CollectionStore } from './data/store/CollectionStore'
export { default as AddToListPopover } from './ui/components/AddToListPopover'
export { WATCH_STATUSES } from './core/constants/Collection.constants'
export type {
    CollectionState,
    CustomList,
    CustomListItem,
    EpisodeProgress,
    MediaSnapshot,
    MediaType,
    WatchStatus,
    WatchlistEntry,
  } from './core/types/Collection.types'