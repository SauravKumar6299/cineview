import { Link } from 'react-router-dom'
import { Button, buildImageUrl, TMDB_IMAGE_SIZES } from '../../../../Common'
import RatingBadge from '../../../../Common/ui/components/RatingBadge'
import type { MovieSummary } from '../../../data/schemas/Movie.schemas'
import { Actions, Content, Hero, HeroTitle, Overlay, Overview } from './StyledComponents'
import { useTranslation } from 'react-i18next'

interface HeroBannerProps {
  movie: MovieSummary
}

const HeroBanner = ({ movie }: HeroBannerProps) => {
  const { t } = useTranslation('movies')
  return (
  <Hero $backdrop={buildImageUrl(movie.backdrop_path, TMDB_IMAGE_SIZES.backdrop) ?? ''}>
    <Overlay>
      <Content>
        <RatingBadge value={movie.vote_average} />
        <HeroTitle>{movie.title}</HeroTitle>
        <Overview>{movie.overview}</Overview>
        <Actions>
          <Link to={`/movie/${movie.id}`}>
            <Button>▶ {t('playTrailer')}</Button>
          </Link>
          <Button type="button">{t('watchlistAdd')}</Button>
        </Actions>
      </Content>
    </Overlay>
  </Hero>
)}

export default HeroBanner