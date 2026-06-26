import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Button,
  ContentRow,
  ErrorBoundary,
  ErrorState,
  Image,
  RatingBadge,
  Spinner,
  TmdbApiError,
  buildImageUrl,
  useTmdbQuery,
  TMDB_IMAGE_SIZES,
} from '../../../../Common'
import { MoviesApi } from '../../../data/MoviesApi'
import type { CastMember, MovieSummary } from '../../../../Movies/data/schemas/Movie.schemas'
import MovieCard from '../../../../Movies/ui/components/MovieCard'
import CastCard from '../../../../Common/ui/components/CastCard'
import TrailerModal from '../../../../Common/ui/components/TrailerModal'
import {
  Actions,
  GenreTag,
  Genres,
  Hero,
  HeroOverlay,
  Info,
  MetaRow,
  NotFoundWrap,
  Overview,
  Page,
  Poster,
  Tagline,
  Title,
} from './StyledComponents'

const formatRuntime = (minutes: number | null): string => {
  if (!minutes) return ''
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours}h ${mins}m`
}


const NotFound = () => {
    const { t } = useTranslation('movies')
    return (
        <NotFoundWrap>
            <h1>{t('notFound.title')}</h1>
            <p>{t('notFound.body')}</p>
            <Link to="/">
                <Button>{t('notFound.backHome')}</Button>
            </Link>
        </NotFoundWrap>
    )
}

const MovieDetailPage = () => {
  const { t } = useTranslation('movies')
  const { movieId } = useParams()
  const id = Number(movieId)
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  const detailQuery = useTmdbQuery(
    (signal) => MoviesApi.getMovieDetail(id, signal),
    [id],
    Number.isFinite(id),
  )

  if (!Number.isFinite(id)) return <NotFound />
  if (detailQuery.status === 'idle' || detailQuery.status === 'loading') return <Spinner />
  if (detailQuery.status === 'error') {
    const isNotFound =
      detailQuery.error instanceof TmdbApiError && detailQuery.error.status === 404
    return isNotFound ? (
      <NotFound />
    ) : (
      <ErrorState message={t('errors.movie')} onRetry={detailQuery.refetch} />
    )
  }

  const movie = detailQuery.data
  const trailer =
    movie.videos.results.find((video) => video.site === 'YouTube' && video.type === 'Trailer') ??
    movie.videos.results.find((video) => video.site === 'YouTube')
  const year = movie.release_date ? movie.release_date.slice(0, 4) : ''
  const runtime = formatRuntime(movie.runtime)

  const renderCast = (member: CastMember) => <CastCard key={member.id} member={member} />
  const renderMovie = (item: MovieSummary) => <MovieCard key={item.id} movie={item} />

  return (
    <Page>
      <ErrorBoundary>
        <Hero $backdrop={buildImageUrl(movie.backdrop_path, TMDB_IMAGE_SIZES.backdrop) ?? ''}>
          <HeroOverlay>
            <Poster>
              <Image
                src={buildImageUrl(movie.poster_path, TMDB_IMAGE_SIZES.poster)}
                alt={movie.title}
              />
            </Poster>
            <Info>
              <Title>{movie.title}</Title>
              {movie.tagline ? <Tagline>{movie.tagline}</Tagline> : null}
              <MetaRow>
                <RatingBadge value={movie.vote_average} />
                {year ? <span>{year}</span> : null}
                {runtime ? <span>{runtime}</span> : null}
                {movie.status ? <span>{movie.status}</span> : null}
              </MetaRow>
              <Genres>
                {movie.genres.map((genre) => (
                  <GenreTag key={genre.id}>{genre.name}</GenreTag>
                ))}
              </Genres>
              <Overview>{movie.overview}</Overview>
              <Actions>
                {trailer ? (
                  <Button onClick={() => setIsTrailerOpen(true)}>▶ {t('playTrailer')}</Button>
                ) : null}
                <Button type="button">+ {t('watchlistAdd')}</Button>
              </Actions>
            </Info>
          </HeroOverlay>
        </Hero>
      </ErrorBoundary>

      {movie.credits.cast.length > 0 ? (
        <ErrorBoundary>
          <ContentRow
            title={t('rows.topCast')}
            items={movie.credits.cast.slice(0, 20)}
            isLoading={false}
            renderItem={renderCast}
          />
        </ErrorBoundary>
      ) : null}

      {movie.similar && movie.similar.results.length > 0 ? (
        <ErrorBoundary>
          <ContentRow
            title={t('rows.similarMovies')}
            items={movie.similar.results}
            isLoading={false}
            renderItem={renderMovie}
          />
        </ErrorBoundary>
      ) : null}

      {movie.recommendations && movie.recommendations.results.length > 0 ? (
        <ErrorBoundary>
          <ContentRow
            title={t('rows.recommended')}
            items={movie.recommendations.results}
            isLoading={false}
            renderItem={renderMovie}
          />
        </ErrorBoundary>
      ) : null}

      {trailer ? (
        <TrailerModal
          videoKey={trailer.key}
          isOpen={isTrailerOpen}
          onClose={() => setIsTrailerOpen(false)}
        />
      ) : null}
    </Page>
  )
}

export default MovieDetailPage