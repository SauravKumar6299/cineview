import type { SeasonSummary } from '../../../data/schemas/Tv.schemas'
import { Heading, List, SeasonItem, SeasonMeta, SeasonName, Wrapper } from './StyledComponents'
import { useTranslation } from 'react-i18next'
interface SeasonListProps {
  tvId: number
  seasons: SeasonSummary[]
  activeSeason: number | null
}

const SeasonList = ({ tvId, seasons, activeSeason }: SeasonListProps) => {
  const { t } = useTranslation('tvShows')
  return (
  <Wrapper>
    <Heading>{t('seasons')}</Heading>
    <List>
      {seasons.map((season) => (
        <SeasonItem
          key={season.id}
          to={`/tv/${tvId}/season/${season.season_number}`}
          $active={activeSeason === season.season_number}
        >
          <SeasonName>{season.name}</SeasonName>
          <SeasonMeta>{t('episodeCount', { count: season.episode_count })}</SeasonMeta>
        </SeasonItem>
      ))}
    </List>
  </Wrapper>
  )
}

export default SeasonList