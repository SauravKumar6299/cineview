import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Image, buildImageUrl, TMDB_IMAGE_SIZES } from '../../../../Common'
import RatingBadge from '../../../../Common/ui/components/RatingBadge'
import type { MovieSummary } from '../../../data/schemas/Movie.schemas'
import { useCollection, AddToListPopover } from '../../../../Collection'
import { Card, CardActions, CardTitle, PosterWrap, RatingSlot, WatchlistButton } from './StyledComponents'

interface MovieCardProps {
  movie: MovieSummary
}

const MovieCard = observer(({ movie }: MovieCardProps) => {
  const { t } = useTranslation('movies')
  const collection = useCollection()
  const isInWatchlist = collection.isInWatchlist('movie', movie.id)

  const snapshot = {
    id: movie.id,
    mediaType: 'movie' as const,
    title: movie.title,
    posterPath: movie.poster_path,
    voteAverage: movie.vote_average,
    releaseDate: movie.release_date,
  }

  const handleToggleWatchlist = () => {
    collection.toggleWatchlist(snapshot)
  }

  return (
    <Card>
      <PosterWrap>
        <Link to={`/movie/${movie.id}`}>
          <Image
            src={buildImageUrl(movie.poster_path, TMDB_IMAGE_SIZES.poster)}
            alt={movie.title}
          />
        </Link>
        <WatchlistButton
          type="button"
          aria-label={isInWatchlist ? t('watchlistRemove') : t('watchlistAdd')}
          $active={isInWatchlist}
          onClick={handleToggleWatchlist}
        >
          ♥
        </WatchlistButton>
        <RatingSlot>
          <RatingBadge value={movie.vote_average} />
        </RatingSlot>
      </PosterWrap>
      <CardActions>
        <CardTitle title={movie.title}>{movie.title}</CardTitle>
        <AddToListPopover snapshot={snapshot} compact />
      </CardActions>
    </Card>
  )
})

export default MovieCard