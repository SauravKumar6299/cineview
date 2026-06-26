import { useState } from 'react'
import {
  ContentRow,
  ErrorBoundary,
  ErrorState,
  Spinner,
  useTmdbQuery,
} from '../../../../Common'
import { MoviesApi } from '../../../../Movies/data/MoviesApi'
import type { MovieSummary } from '../../../../Movies/data/schemas/Movie.schemas'
import MovieCard from '../../../../Movies/ui/components/MovieCard'
import HeroBanner from '../../../../Movies/ui/components/HeroBanner'
import GenreFilter from '../../../../Movies/ui/components/GenreFilter'
import { Page, Rows } from './StyledComponents'

const HomePage = () => {
  const [activeGenreId, setActiveGenreId] = useState<number | null>(null)

  const genresQuery = useTmdbQuery((signal) => MoviesApi.getGenres(signal), [])
  const trendingQuery = useTmdbQuery((signal) => MoviesApi.getTrending(signal), [])
  const popularQuery = useTmdbQuery((signal) => MoviesApi.getPopular(signal), [])
  const topRatedQuery = useTmdbQuery((signal) => MoviesApi.getTopRated(signal), [])
  const upcomingQuery = useTmdbQuery((signal) => MoviesApi.getUpcoming(signal), [])
  const discoverQuery = useTmdbQuery(
    (signal) => MoviesApi.discoverByGenre(activeGenreId as number, signal),
    [activeGenreId],
    activeGenreId !== null,
  )

  const renderCard = (movie: MovieSummary) => <MovieCard key={movie.id} movie={movie} />
  const heroMovie = trendingQuery.data?.results[0] ?? null

  return (
    <Page>
      {trendingQuery.status === 'loading' ? <Spinner /> : null}
      {trendingQuery.status === 'error' ? (
        <ErrorState message="Failed to load featured movie." onRetry={trendingQuery.refetch} />
      ) : null}
      {heroMovie ? (
        <ErrorBoundary>
          <HeroBanner movie={heroMovie} />
        </ErrorBoundary>
      ) : null}

      <ErrorBoundary>
        <GenreFilter
          genres={genresQuery.data?.genres ?? []}
          activeGenreId={activeGenreId}
          onSelect={setActiveGenreId}
        />
      </ErrorBoundary>

      <Rows>
        {activeGenreId !== null ? (
          <ErrorBoundary>
            <ContentRow
              title="Genre Results"
              items={discoverQuery.data?.results ?? []}
              isLoading={discoverQuery.status === 'loading'}
              isError={discoverQuery.status === 'error'}
              onRetry={discoverQuery.refetch}
              renderItem={renderCard}
              emptyMessage="No movies found for this genre."
            />
          </ErrorBoundary>
        ) : (
          <>
            <ErrorBoundary>
              <ContentRow
                title="Trending Today"
                items={trendingQuery.data?.results ?? []}
                isLoading={trendingQuery.status === 'loading'}
                isError={trendingQuery.status === 'error'}
                onRetry={trendingQuery.refetch}
                renderItem={renderCard}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              <ContentRow
                title="Popular Movies"
                items={popularQuery.data?.results ?? []}
                isLoading={popularQuery.status === 'loading'}
                isError={popularQuery.status === 'error'}
                onRetry={popularQuery.refetch}
                renderItem={renderCard}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              <ContentRow
                title="Top Rated"
                items={topRatedQuery.data?.results ?? []}
                isLoading={topRatedQuery.status === 'loading'}
                isError={topRatedQuery.status === 'error'}
                onRetry={topRatedQuery.refetch}
                renderItem={renderCard}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              <ContentRow
                title="Upcoming"
                items={upcomingQuery.data?.results ?? []}
                isLoading={upcomingQuery.status === 'loading'}
                isError={upcomingQuery.status === 'error'}
                onRetry={upcomingQuery.refetch}
                renderItem={renderCard}
              />
            </ErrorBoundary>
          </>
        )}
      </Rows>
    </Page>
  )
}

export default HomePage