import type { Episode } from '../../../data/schemas/Tv.schemas'
import EpisodeRow from '../EpisodeRow'
import { List } from './StyledComponents'

interface EpisodeListProps {
  episodes: Episode[]
  isEpisodeWatched: (episodeId: number) => boolean
  onToggleEpisode: (episodeId: number) => void
}

const EpisodeList = ({
  episodes,
  isEpisodeWatched,
  onToggleEpisode,
}: EpisodeListProps) => (
  <List>
    {episodes.map((episode) => (
      <EpisodeRow
        key={episode.id}
        episode={episode}
        isWatched={isEpisodeWatched(episode.id)}
        onToggleWatched={() => onToggleEpisode(episode.id)}
      />
    ))}
  </List>
)

export default EpisodeList