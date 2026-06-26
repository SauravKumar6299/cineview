import { Image, RatingBadge, buildImageUrl, TMDB_IMAGE_SIZES } from '../../../../Common'
import type { SearchResult } from '../../../data/schemas/Search.schemas'
import { Card, CardLink, Meta, Name, Poster, RatingSlot } from './StyledComponents'

interface ResultCardProps {
  result: SearchResult
}

const ResultCard = ({ result }: ResultCardProps) => {
  if (result.media_type === 'person') {
    return (
      <Card>
        <Poster>
          <Image
            src={buildImageUrl(result.profile_path, TMDB_IMAGE_SIZES.profile)}
            alt={result.name}
          />
        </Poster>
        <Name title={result.name}>{result.name}</Name>
        <Meta>{result.known_for_department || 'Person'}</Meta>
      </Card>
    )
  }

  const title = result.media_type === 'movie' ? result.title : result.name
  const to = result.media_type === 'movie' ? `/movie/${result.id}` : `/tv/${result.id}`

  return (
    <CardLink to={to}>
      <Poster>
        <Image
          src={buildImageUrl(result.poster_path, TMDB_IMAGE_SIZES.poster)}
          alt={title}
        />
        <RatingSlot>
          <RatingBadge value={result.vote_average} />
        </RatingSlot>
      </Poster>
      <Name title={title}>{title}</Name>
    </CardLink>
  )
}

export default ResultCard