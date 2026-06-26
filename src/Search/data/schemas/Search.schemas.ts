import { z } from 'zod'

const movieResultSchema = z.object({
  media_type: z.literal('movie'),
  id: z.number(),
  title: z.string(),
  poster_path: z.string().nullable(),
  vote_average: z.number().optional().default(0),
  overview: z.string().optional().default(''),
  release_date: z.string().optional().default(''),
})

const tvResultSchema = z.object({
  media_type: z.literal('tv'),
  id: z.number(),
  name: z.string(),
  poster_path: z.string().nullable(),
  vote_average: z.number().optional().default(0),
  overview: z.string().optional().default(''),
  first_air_date: z.string().optional().default(''),
})

const personResultSchema = z.object({
  media_type: z.literal('person'),
  id: z.number(),
  name: z.string(),
  profile_path: z.string().nullable(),
  known_for_department: z.string().optional().default(''),
})

export const searchResultSchema = z.discriminatedUnion('media_type', [
  movieResultSchema,
  tvResultSchema,
  personResultSchema,
])

const KNOWN_TYPES = ['movie', 'tv', 'person']

export const multiSearchSchema = z.object({
  page: z.number(),
  results: z.preprocess(
    (value) =>
      Array.isArray(value)
        ? value.filter((item) =>
            KNOWN_TYPES.includes((item as { media_type?: string }).media_type ?? ''),
          )
        : value,
    z.array(searchResultSchema),
  ),
  total_pages: z.number(),
  total_results: z.number(),
})

export const recentSearchesSchema = z.array(z.string())

export type SearchResult = z.infer<typeof searchResultSchema>
export type MultiSearch = z.infer<typeof multiSearchSchema>