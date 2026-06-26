import { z } from 'zod'

const genreSchema = z.object({ id: z.number(), name: z.string() })
const videoSchema = z.object({
  id: z.string(),
  key: z.string(),
  name: z.string(),
  site: z.string(),
  type: z.string(),
})
const castMemberSchema = z.object({
  id: z.number(),
  name: z.string(),
  character: z.string().optional().default(''),
  profile_path: z.string().nullable(),
})

export const seasonSummarySchema = z.object({
  id: z.number(),
  season_number: z.number(),
  name: z.string(),
  episode_count: z.number().optional().default(0),
  poster_path: z.string().nullable(),
  air_date: z.string().nullable().optional().default(null),
  overview: z.string().optional().default(''),
})

export const tvDetailSchema = z.object({
  id: z.number(),
  name: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
  first_air_date: z.string().optional().default(''),
  number_of_seasons: z.number().optional().default(0),
  number_of_episodes: z.number().optional().default(0),
  status: z.string().optional().default(''),
  tagline: z.string().optional().default(''),
  genres: z.array(genreSchema).optional().default([]),
  networks: z.array(z.object({ id: z.number(), name: z.string() })).optional().default([]),
  seasons: z.array(seasonSummarySchema).optional().default([]),
  credits: z
    .object({ cast: z.array(castMemberSchema).optional().default([]) })
    .optional()
    .default({ cast: [] }),
  videos: z
    .object({ results: z.array(videoSchema).optional().default([]) })
    .optional()
    .default({ results: [] }),
})

export const episodeSchema = z.object({
  id: z.number(),
  episode_number: z.number(),
  name: z.string(),
  overview: z.string().optional().default(''),
  still_path: z.string().nullable(),
  air_date: z.string().nullable().optional().default(null),
  runtime: z.number().nullable().optional().default(null),
})

export const seasonDetailSchema = z.object({
  id: z.number(),
  season_number: z.number(),
  name: z.string(),
  overview: z.string().optional().default(''),
  episodes: z.array(episodeSchema).optional().default([]),
})

export type SeasonSummary = z.infer<typeof seasonSummarySchema>
export type TvDetail = z.infer<typeof tvDetailSchema>
export type CastMember = z.infer<typeof castMemberSchema>
export type Episode = z.infer<typeof episodeSchema>
export type SeasonDetail = z.infer<typeof seasonDetailSchema>