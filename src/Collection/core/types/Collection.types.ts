export type MediaType = 'movie' | 'tv'
export type WatchStatus = 'want_to_watch' | 'watching' | 'completed'

export interface MediaSnapshot {
  id: number
  mediaType: MediaType
  title: string
  posterPath: string | null
  voteAverage: number
  releaseDate?: string
}

export interface WatchlistEntry {
  id: string
  mediaId: number
  mediaType: MediaType
  status: WatchStatus
  note: string
  snapshot: MediaSnapshot
  createdAt: string
  updatedAt: string
}

export interface CustomListItem {
  id: string
  mediaId: number
  mediaType: MediaType
  snapshot: MediaSnapshot
  addedAt: string
}

export interface CustomList {
  id: string
  name: string
  description: string
  items: CustomListItem[]
  createdAt: string
  updatedAt: string
}

export interface EpisodeProgress {
  tvId: number
  seasonNumber: number
  watchedEpisodeIds: number[]
  updatedAt: string
}

export interface CollectionState {
  version: 2
  watchlist: WatchlistEntry[]
  lists: CustomList[]
  episodeProgress: EpisodeProgress[]
}