import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useCollection } from '../../../../Collection'
import { EmptyState, ErrorState, Spinner, useTmdbQuery } from '../../../../Common'
import { TvApi } from '../../../data/TvApi'
import EpisodeList from '../../../ui/components/EpisodeList'
import {
  Actions,
  Header,
  HeaderTop,
  ProgressFill,
  ProgressMeta,
  ProgressTrack,
  ProgressWrap,
  SeasonTitle,
  SmallButton,
} from './StyledComponents'

const SeasonDetailPage = observer(() => {
  const { t } = useTranslation('tvShows')
  const collection = useCollection()
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
    return <ErrorState message={t('errors.season')} onRetry={seasonQuery.refetch} />
  }

  const data = seasonQuery.data
  if (data.episodes.length === 0) {
    return <EmptyState message={t('empty.noEpisodes')} />
  }

  const watchedCount = data.episodes.filter((episode) =>
    collection.isEpisodeWatched(id, season, episode.id),
  ).length
  const totalCount = data.episodes.length
  const progressPercent = totalCount > 0 ? Math.round((watchedCount / totalCount) * 100) : 0
  const allEpisodeIds = data.episodes.map((episode) => episode.id)

  return (
    <section>
      <Header>
        <HeaderTop>
          <SeasonTitle>{data.name}</SeasonTitle>
          <Actions>
            <SmallButton type="button" onClick={() => collection.markSeason(id, season, allEpisodeIds)}>
              {t('progress.markAll')}
            </SmallButton>
            <SmallButton type="button" onClick={() => collection.unmarkSeason(id, season)}>
              {t('progress.unmarkAll')}
            </SmallButton>
          </Actions>
        </HeaderTop>

        <ProgressWrap>
          <ProgressMeta>
            {t('progress.season', { watched: watchedCount, total: totalCount })}
          </ProgressMeta>
          <ProgressTrack>
            <ProgressFill $percent={progressPercent} />
          </ProgressTrack>
        </ProgressWrap>
      </Header>

      <EpisodeList
        episodes={data.episodes}
        isEpisodeWatched={(episodeId) => collection.isEpisodeWatched(id, season, episodeId)}
        onToggleEpisode={(episodeId) => collection.toggleEpisode(id, season, episodeId)}
      />
    </section>
  )
})

export default SeasonDetailPage