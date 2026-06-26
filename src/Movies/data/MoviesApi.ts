import { tmdbGet } from '../../Common'
import { genreListSchema, movieDetailSchema, paginatedMoviesSchema } from './schemas/Movie.schemas'

export const MoviesApi = {
  getTrending: (signal?: AbortSignal) =>
    tmdbGet('/trending/movie/day', paginatedMoviesSchema, undefined, signal),

  getPopular: (signal?: AbortSignal) =>
    tmdbGet('/movie/popular', paginatedMoviesSchema, undefined, signal),

  getTopRated: (signal?: AbortSignal) =>
    tmdbGet('/movie/top_rated', paginatedMoviesSchema, undefined, signal),

  getUpcoming: (signal?: AbortSignal) =>
    tmdbGet('/movie/upcoming', paginatedMoviesSchema, undefined, signal),

  getGenres: (signal?: AbortSignal) =>
    tmdbGet('/genre/movie/list', genreListSchema, undefined, signal),

  discoverByGenre: (genreId: number, signal?: AbortSignal) =>
    tmdbGet(
      '/discover/movie',
      paginatedMoviesSchema,
      { with_genres: genreId, sort_by: 'popularity.desc' },
      signal,
    ),
  getMovieDetail: (movieId: number, signal?: AbortSignal) =>
    tmdbGet(
        `/movie/${movieId}`,
        movieDetailSchema,
        { append_to_response: 'videos,credits,similar,recommendations' },
        signal,
    ),
}