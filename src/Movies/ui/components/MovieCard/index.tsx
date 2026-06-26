import { Link } from 'react-router-dom'
import { Image, buildImageUrl, TMDB_IMAGE_SIZES } from '../../../../Common'
import RatingBadge from '../../../../Common/ui/components/RatingBadge'
import type { MovieSummary } from '../../../data/schemas/Movie.schemas'
import { Card, CardTitle, PosterWrap, RatingSlot, WatchlistButton } from './StyledComponents'

interface MovieCardProps {
  movie: MovieSummary
  isInWatchlist?: boolean
  onToggleWatchlist?: () => void
}

const MovieCard = ({ movie, isInWatchlist = false, onToggleWatchlist }: MovieCardProps) => (
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
        aria-label="Toggle watchlist"
        $active={isInWatchlist}
        onClick={onToggleWatchlist}
      >
        ♥
      </WatchlistButton>
      <RatingSlot>
        <RatingBadge value={movie.vote_average} />
      </RatingSlot>
    </PosterWrap>
    <CardTitle title={movie.title}>{movie.title}</CardTitle>
  </Card>
)

export default MovieCard