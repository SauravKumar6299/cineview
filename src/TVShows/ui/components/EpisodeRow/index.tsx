import { useTranslation } from 'react-i18next'
import { Image, buildImageUrl, TMDB_IMAGE_SIZES } from '../../../../Common'
import type { Episode } from '../../../../TVShows/data/schemas/Tv.schemas'
import {
  AirDate,
  Content,
  EpBadge,
  EpOverview,
  EpTitle,
  Row,
  RowHeader,
  Still,
  WatchedToggle,
} from './StyledComponents'

interface EpisodeRowProps {
  episode: Episode
  isWatched: boolean
  onToggleWatched: () => void
}

const EpisodeRow = ({ episode, isWatched, onToggleWatched }: EpisodeRowProps) => {
  const { t } = useTranslation('tvShows')

  return (
    <Row>
      <Still>
        <Image src={buildImageUrl(episode.still_path, TMDB_IMAGE_SIZES.still)} alt={episode.name} />
        <EpBadge>{t('episodeLabel', { number: episode.episode_number })}</EpBadge>
      </Still>

      <Content>
        <RowHeader>
          <EpTitle>
            {t('chapterTitle', { number: episode.episode_number, title: episode.name })}
          </EpTitle>
          <WatchedToggle
            type="checkbox"
            checked={isWatched}
            onChange={onToggleWatched}
            aria-label={t('markWatched')}
          />
        </RowHeader>

        {episode.air_date ? <AirDate>{episode.air_date}</AirDate> : null}
        <EpOverview>{episode.overview}</EpOverview>
      </Content>
    </Row>
  )
}

export default EpisodeRow