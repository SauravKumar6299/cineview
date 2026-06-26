import { Image, buildImageUrl, TMDB_IMAGE_SIZES } from '../../../../Common'
import type { Episode } from '../../../../TVShows/data/schemas/Tv.schemas'
import { useTranslation } from 'react-i18next'
import {
  AirDate,
  Content,
  EpBadge,
  EpOverview,
  EpTitle,
  PlaceholderToggle,
  Row,
  RowHeader,
  Still,
} from './StyledComponents'

interface EpisodeRowProps {
  episode: Episode
}

const EpisodeRow = ({ episode }: EpisodeRowProps) => {
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
        {/* Watched toggle is a placeholder — wired up in Milestone 6 */}
        <PlaceholderToggle type="button" aria-label={t('markWatched')} disabled />
      </RowHeader>
      {episode.air_date ? <AirDate>{episode.air_date}</AirDate> : null}
      <EpOverview>{episode.overview}</EpOverview>
    </Content>
  </Row>
)
}

export default EpisodeRow