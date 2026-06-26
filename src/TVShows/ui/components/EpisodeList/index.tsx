import type { Episode } from '../../../data/schemas/Tv.schemas'
import EpisodeRow from '../EpisodeRow'
import { List } from './StyledComponents'

interface EpisodeListProps {
  episodes: Episode[]
}

const EpisodeList = ({ episodes }: EpisodeListProps) => (
  <List>
    {episodes.map((episode) => (
      <EpisodeRow key={episode.id} episode={episode} />
    ))}
  </List>
)

export default EpisodeList