import { useParams } from 'react-router-dom'
import { EmptyState, ErrorState, Spinner, useTmdbQuery } from '../../../../Common'
import { TvApi } from '../../../data/TvApi'
import EpisodeList from '../../../ui/components/EpisodeList'
import { SeasonTitle } from './StyledComponents'

const SeasonDetailPage = () => {
  const { tvId, seasonNumber } = useParams()
  const id = Number(tvId)
  const season = Number(seasonNumber)

  const seasonQuery = useTmdbQuery(
    (signal) => TvApi.getSeasonDetail(id, season, signal),
    [id, season],
    Number.isFinite(id) && Number.isFinite(season),
  )

  if (seasonQuery.status === 'idle' || seasonQuery.status === 'loading') return <Spinner />
  if (seasonQuery.status === 'error') {
    return <ErrorState message="Failed to load this season." onRetry={seasonQuery.refetch} />
  }

  const data = seasonQuery.data
  if (data.episodes.length === 0) {
    return <EmptyState message="No episodes found for this season." />
  }

  return (
    <section>
      <SeasonTitle>{data.name}</SeasonTitle>
      <EpisodeList episodes={data.episodes} />
    </section>
  )
}

export default SeasonDetailPage