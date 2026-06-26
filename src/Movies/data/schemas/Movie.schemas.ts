import { z } from 'zod'

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const genreListSchema = z.object({
  genres: z.array(genreSchema),
})

export const movieSummarySchema = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  backdrop_path: z.string().nullable(),
  vote_average: z.number(),
  release_date: z.string().optional().default(''),
  genre_ids: z.array(z.number()).optional().default([]),
})

export const paginatedMoviesSchema = z.object({
  page: z.number(),
  results: z.array(movieSummarySchema),
  total_pages: z.number(),
  total_results: z.number(),
})


export const castMemberSchema = z.object({
    id: z.number(),
    name: z.string(),
    character: z.string().optional().default(''),
    profile_path: z.string().nullable(),
})

export const videoSchema = z.object({
    id: z.string(),
    key: z.string(),
    name: z.string(),
    site: z.string(),
    type: z.string(),
    official: z.boolean().optional().default(false),
})

export const movieDetailSchema = z.object({
    id: z.number(),
    title: z.string(),
    overview: z.string(),
    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),
    vote_average: z.number(),
    release_date: z.string().optional().default(''),
    runtime: z.number().nullable().optional().default(null),
    tagline: z.string().optional().default(''),
    status: z.string().optional().default(''),
    genres: z.array(genreSchema).optional().default([]),
    credits: z
    .object({ cast: z.array(castMemberSchema).optional().default([]) })
    .optional()
    .default({ cast: [] }),
    videos: z
    .object({ results: z.array(videoSchema).optional().default([]) })
    .optional()
    .default({ results: [] }),
    similar: paginatedMoviesSchema.optional(),
    recommendations: paginatedMoviesSchema.optional(),
})

export type Genre = z.infer<typeof genreSchema>
export type GenreList = z.infer<typeof genreListSchema>
export type MovieSummary = z.infer<typeof movieSummarySchema>
export type PaginatedMovies = z.infer<typeof paginatedMoviesSchema>
export type CastMember = z.infer<typeof castMemberSchema>
export type Video = z.infer<typeof videoSchema>
export type MovieDetail = z.infer<typeof movieDetailSchema>