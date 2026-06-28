import { useMemo, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useTranslation } from 'react-i18next'
import { EmptyState, Image, RatingBadge, TMDB_IMAGE_SIZES, buildImageUrl } from '../../../../Common'
import { WATCH_STATUSES, useCollection, type WatchStatus, type WatchlistEntry } from '../../../../Collection'
import {
  Actions,
  FilterButton,
  Filters,
  Grid,
  Header,
  Item,
  ItemBody,
  ItemTitleLink,
  ItemTop,
  Meta,
  NoteArea,
  NoteFooter,
  Page,
  PosterLink,
  RemoveButton,
  Select,
  SortControl,
  EpisodeProgressBadge,
  Subtitle,
  Title,
  Toolbar,
} from './StyledComponents'

type FilterValue = WatchStatus | 'all'
type SortValue = 'newest' | 'rating' | 'title'

const getDetailPath = (entry: WatchlistEntry) =>
  entry.mediaType === 'movie' ? `/movie/${entry.mediaId}` : `/tv/${entry.mediaId}`

const sortEntries = (entries: WatchlistEntry[], sort: SortValue) => {
  const sorted = [...entries]

  if (sort === 'newest') {
    return sorted.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
  }

  if (sort === 'rating') {
    return sorted.sort((a, b) => b.snapshot.voteAverage - a.snapshot.voteAverage)
  }

  return sorted.sort((a, b) => a.snapshot.title.localeCompare(b.snapshot.title))
}

const WatchlistPage = observer(() => {
  const { t } = useTranslation('collection')
  const collection = useCollection()
  const [filter, setFilter] = useState<FilterValue>('all')
  const [sort, setSort] = useState<SortValue>('newest')

  const visibleEntries = useMemo(() => {
    const filtered =
      filter === 'all'
        ? collection.watchlist
        : collection.watchlist.filter((entry) => entry.status === filter)

    return sortEntries(filtered, sort)
  }, [collection.watchlist, filter, sort])

  const countFor = (status: FilterValue) =>
    status === 'all'
      ? collection.totalWatchlistCount
      : collection.watchlist.filter((entry) => entry.status === status).length

  return (
    <Page>
      <Header>
        <Title>{t('watchlist.title')}</Title>
        <Subtitle>{t('watchlist.subtitle')}</Subtitle>
      </Header>

      <Toolbar>
        <Filters>
          <FilterButton type="button" $active={filter === 'all'} onClick={() => setFilter('all')}>
            {t('watchlist.filters.all')} ({countFor('all')})
          </FilterButton>
          {WATCH_STATUSES.map((status) => (
            <FilterButton
              key={status.value}
              type="button"
              $active={filter === status.value}
              onClick={() => setFilter(status.value)}
            >
              {t(status.labelKey)} ({countFor(status.value)})
            </FilterButton>
          ))}
        </Filters>

        <SortControl>
          {t('watchlist.sort.label')}
          <Select value={sort} onChange={(event) => setSort(event.target.value as SortValue)}>
            <option value="newest">{t('watchlist.sort.newest')}</option>
            <option value="rating">{t('watchlist.sort.rating')}</option>
            <option value="title">{t('watchlist.sort.title')}</option>
          </Select>
        </SortControl>
      </Toolbar>

      {visibleEntries.length === 0 ? (
        <EmptyState message={t('watchlist.empty')} />
      ) : (
        <Grid>
          {visibleEntries.map((entry) => (
            <Item key={entry.id}>
              <PosterLink to={getDetailPath(entry)}>
                <Image
                  src={buildImageUrl(entry.snapshot.posterPath, TMDB_IMAGE_SIZES.poster)}
                  alt={entry.snapshot.title}
                />
              </PosterLink>

              <ItemBody>
                <ItemTop>
                  <div>
                    <ItemTitleLink to={getDetailPath(entry)}>
                      {entry.snapshot.title}
                    </ItemTitleLink>
                    <Meta>
                      <span>{t(`watchlist.mediaType.${entry.mediaType}`)}</span>
                      {entry.snapshot.releaseDate ? (
                        <span>{entry.snapshot.releaseDate.slice(0, 4)}</span>
                      ) : null}
                      <RatingBadge value={entry.snapshot.voteAverage} />
                    </Meta>
                  </div>

                  <RemoveButton type="button" onClick={() => collection.remove(entry.id)}>
                    {t('watchlist.actions.remove')}
                  </RemoveButton>
                </ItemTop>

                <Actions>
                  <Select
                    value={entry.status}
                    onChange={(event) => collection.updateStatus(entry.id, event.target.value as WatchStatus)}
                  >
                    {WATCH_STATUSES.map((status) => (
                      <option key={status.value} value={status.value}>
                        {t(status.labelKey)}
                      </option>
                    ))}
                  </Select>
                </Actions>
                {entry.mediaType === 'tv' && collection.getWatchedEpisodeCount(entry.mediaId) > 0 ? (
                <EpisodeProgressBadge>
                    {t('watchlist.episodeProgress', {
                    watched: collection.getWatchedEpisodeCount(entry.mediaId),
                    })}
                </EpisodeProgressBadge>
                ) : null}
                <NoteArea
                  maxLength={300}
                  value={entry.note}
                  placeholder={t('watchlist.actions.notePlaceholder')}
                  onChange={(event) => collection.updateNote(entry.id, event.target.value)}
                />
                <NoteFooter $warning={entry.note.length >= 280}>
                  <span>{t('watchlist.noteCounter', { count: entry.note.length })}</span>
                  {entry.note ? (
                    <button type="button" onClick={() => collection.updateNote(entry.id, '')}>
                      {t('watchlist.actions.clearNote')}
                    </button>
                  ) : null}
                </NoteFooter>
              </ItemBody>
            </Item>
          ))}
        </Grid>
      )}
    </Page>
  )
})

export default WatchlistPage