import { z } from 'zod'

export const mediaTypeSchema = z.enum(['movie', 'tv'])
export const watchStatusSchema = z.enum(['want_to_watch', 'watching', 'completed'])

export const mediaSnapshotSchema = z.object({
  id: z.number(),
  mediaType: mediaTypeSchema,
  title: z.string().min(1),
  posterPath: z.string().nullable(),
  voteAverage: z.number(),
  releaseDate: z.string().optional(),
})

export const watchlistEntrySchema = z.object({
  id: z.uuid(),
  mediaId: z.number(),
  mediaType: mediaTypeSchema,
  status: watchStatusSchema,
  note: z.string().max(300),
  snapshot: mediaSnapshotSchema,
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
})

export const customListItemSchema = z.object({
  id: z.uuid(),
  mediaId: z.number(),
  mediaType: mediaTypeSchema,
  snapshot: mediaSnapshotSchema,
  addedAt: z.iso.datetime(),
})

export const customListSchema = z.object({
  id: z.uuid(),
  name: z.string().min(1).max(60),
  description: z.string().max(300),
  items: z.array(customListItemSchema),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
})

export const episodeProgressSchema = z.object({
  tvId: z.number(),
  seasonNumber: z.number(),
  watchedEpisodeIds: z.array(z.number()),
  updatedAt: z.iso.datetime(),
})

export const collectionStateV1Schema = z.object({
  version: z.literal(1),
  watchlist: z.array(watchlistEntrySchema),
})

export const collectionStateSchema = z.object({
  version: z.literal(2),
  watchlist: z.array(watchlistEntrySchema),
  lists: z.array(customListSchema),
  episodeProgress: z.array(episodeProgressSchema),
})