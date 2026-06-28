import type { CollectionState, WatchStatus } from '../types/Collection.types'

export const COLLECTION_STORAGE_KEY = 'cineview.collection'

export const WATCH_STATUSES: ReadonlyArray<{ value: WatchStatus; labelKey: string }> = [
  { value: 'want_to_watch', labelKey: 'watchlist.status.wantToWatch' },
  { value: 'watching', labelKey: 'watchlist.status.watching' },
  { value: 'completed', labelKey: 'watchlist.status.completed' },
]

export const DEFAULT_COLLECTION_STATE: CollectionState = {
  version: 2,
  watchlist: [],
  lists: [],
  episodeProgress: [],
}