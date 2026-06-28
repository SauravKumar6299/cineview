import { DEFAULT_COLLECTION_STATE, COLLECTION_STORAGE_KEY } from '../../core/constants/Collection.constants'
import type { CollectionState } from '../../core/types/Collection.types'
import { collectionStateSchema, collectionStateV1Schema } from '../schemas/Collection.schemas'

const migrateToV2 = (value: unknown): CollectionState => {
  const v2 = collectionStateSchema.safeParse(value)
  if (v2.success) return v2.data

  const v1 = collectionStateV1Schema.safeParse(value)
  if (v1.success) {
    return {
      version: 2,
      watchlist: v1.data.watchlist,
      lists: [],
      episodeProgress: [],
    }
  }

  return DEFAULT_COLLECTION_STATE
}

export const readCollectionState = (): CollectionState => {
  const raw = localStorage.getItem(COLLECTION_STORAGE_KEY)
  if (!raw) return DEFAULT_COLLECTION_STATE

  try {
    return migrateToV2(JSON.parse(raw))
  } catch {
    return DEFAULT_COLLECTION_STATE
  }
}

export const writeCollectionState = (state: CollectionState) => {
  const parsed = collectionStateSchema.safeParse(state)
  if (!parsed.success) return

  localStorage.setItem(COLLECTION_STORAGE_KEY, JSON.stringify(parsed.data))
}