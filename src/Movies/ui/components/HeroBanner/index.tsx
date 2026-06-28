import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { AddToListPopover, useCollection } from '../../../../Collection'
import {
  Button,
  TrailerModal,
  buildImageUrl,
  useTmdbQuery,
  TMDB_IMAGE_SIZES,
} from '../../../../Common'
import RatingBadge from '../../../../Common/ui/components/RatingBadge'
import { MoviesApi } from '../../../data/MoviesApi'
import type { MovieSummary } from '../../../data/schemas/Movie.schemas'
import { Actions, Content, Hero, HeroTitle, Overlay, Overview } from './StyledComponents'

interface HeroBannerProps {
  movie: MovieSummary
}

const HeroBanner = observer(({ movie }: HeroBannerProps) => {
  const { t } = useTranslation('movies')
  const collection = useCollection()
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  const detailQuery = useTmdbQuery(
    (signal) => MoviesApi.getMovieDetail(movie.id, signal),
    [movie.id],
  )

  const snapshot = {
    id: movie.id,
    mediaType: 'movie' as const,
    title: movie.title,
    posterPath: movie.poster_path,
    voteAverage: movie.vote_average,
    releaseDate: movie.release_date,
  }

  const isInWatchlist = collection.isInWatchlist('movie', movie.id)
  const trailer =
    detailQuery.data?.videos.results.find((video) => video.site === 'YouTube' && video.type === 'Trailer') ??
    detailQuery.data?.videos.results.find((video) => video.site === 'YouTube')

  const handleToggleWatchlist = () => {
    collection.toggleWatchlist(snapshot)
  }

  return (
    <Hero $backdrop={buildImageUrl(movie.backdrop_path, TMDB_IMAGE_SIZES.backdrop) ?? ''}>
      <Overlay>
        <Content>
          <RatingBadge value={movie.vote_average} />
          <HeroTitle>{movie.title}</HeroTitle>
          <Overview>{movie.overview}</Overview>

          <Actions>
            <Button type="button" onClick={() => setIsTrailerOpen(true)} disabled={!trailer}>
              ▶ {t('playTrailer')}
            </Button>

            <Button type="button" onClick={handleToggleWatchlist}>
              {isInWatchlist ? '✓' : '+'} {isInWatchlist ? t('watchlistRemove') : t('watchlistAdd')}
            </Button>

            <AddToListPopover snapshot={snapshot} compact />
          </Actions>
        </Content>
      </Overlay>

      {trailer ? (
        <TrailerModal
          videoKey={trailer.key}
          isOpen={isTrailerOpen}
          onClose={() => setIsTrailerOpen(false)}
        />
      ) : null}
    </Hero>
  )
})

export default HeroBanner