import { useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Button,
  CastCard,
  ContentRow,
  EmptyState,
  ErrorBoundary,
  ErrorState,
  Image,
  RatingBadge,
  Spinner,
  TmdbApiError,
  TrailerModal,
  buildImageUrl,
  useTmdbQuery,
  TMDB_IMAGE_SIZES,
} from '../../../../Common'
import { TvApi } from '../../../data/TvApi'
import type { CastMember } from '../../../data/schemas/Tv.schemas'
import SeasonList from '../../../ui/components/SeasonList'
import {
  Actions,
  Body,
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
  SeasonPanel,
  Tagline,
  Title,
} from './StyledComponents'

const NotFound = () => {
  const { t } = useTranslation('tv')
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

const TVShowDetailPage = () => {
  const { t } = useTranslation('tv')
  const { tvId, seasonNumber } = useParams()
  const id = Number(tvId)
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  const detailQuery = useTmdbQuery(
    (signal) => TvApi.getTvDetail(id, signal),
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
      <ErrorState message={t('errors.show')} onRetry={detailQuery.refetch} />
    )
  }

  const show = detailQuery.data
  const trailer =
    show.videos.results.find((video) => video.site === 'YouTube' && video.type === 'Trailer') ??
    show.videos.results.find((video) => video.site === 'YouTube')
  const year = show.first_air_date ? show.first_air_date.slice(0, 4) : ''
  const renderCast = (member: CastMember) => <CastCard key={member.id} member={member} />

  return (
    <Page>
      <ErrorBoundary>
        <Hero $backdrop={buildImageUrl(show.backdrop_path, TMDB_IMAGE_SIZES.backdrop) ?? ''}>
          <HeroOverlay>
            <Poster>
              <Image
                src={buildImageUrl(show.poster_path, TMDB_IMAGE_SIZES.poster)}
                alt={show.name}
              />
            </Poster>
            <Info>
              <Title>{show.name}</Title>
              {show.tagline ? <Tagline>{show.tagline}</Tagline> : null}
              <MetaRow>
                <RatingBadge value={show.vote_average} />
                {year ? <span>{year}</span> : null}
                <span>{show.number_of_seasons} {t('seasonCount', { count: show.number_of_seasons })}</span>
                <span>{show.number_of_episodes} {t('episodeCount', { count: show.number_of_episodes })}</span>
                {show.status ? <span>{show.status}</span> : null}
              </MetaRow>
              <Genres>
                {show.genres.map((genre) => (
                  <GenreTag key={genre.id}>{genre.name}</GenreTag>
                ))}
              </Genres>
              <Overview>{show.overview}</Overview>
              <Actions>
                {trailer ? (
                  <Button onClick={() => setIsTrailerOpen(true)}>▶ {t('playTrailer')}</Button>
                ) : null}
                <Button variant="ghost" type="button">+ {t('watchlistAdd')}</Button>
              </Actions>
            </Info>
          </HeroOverlay>
        </Hero>
      </ErrorBoundary>

      {show.credits.cast.length > 0 ? (
        <ErrorBoundary>
          <ContentRow
            title={t('rows.topCast')}
            items={show.credits.cast.slice(0, 20)}
            isLoading={false}
            renderItem={renderCast}
          />
        </ErrorBoundary>
      ) : null}

      <Body>
        <ErrorBoundary>
          <SeasonList
            tvId={id}
            seasons={show.seasons}
            activeSeason={seasonNumber ? Number(seasonNumber) : null}
          />
        </ErrorBoundary>
        <SeasonPanel>
          <ErrorBoundary>
            {seasonNumber ? <Outlet /> : <EmptyState message="Select a season to view episodes." />}
          </ErrorBoundary>
        </SeasonPanel>
      </Body>

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

export default TVShowDetailPage