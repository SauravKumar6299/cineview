import { useState, type SubmitEvent } from 'react'
import { EmptyState, ErrorState, Spinner, useDebounce, useTmdbQuery } from '../../../../Common'
import { SearchApi } from '../../../data/SearchApi'
import { useTranslation } from 'react-i18next'
import {
  addRecentSearch,
  clearRecentSearches,
  readRecentSearches,
} from '../../../../Search/data/RecentSearches.services'
import ResultGroup from '../../components/ResultGroup'
import RecentSearches from '../../components/RecentSearches'
import { Page, SearchBar, SearchInput } from './StyledComponents'

const SearchPage = () => {
  const { t } = useTranslation('search')
  const [query, setQuery] = useState('')
  const [recent, setRecent] = useState<string[]>(() => readRecentSearches())
  const debounced = useDebounce(query, 400)
  const trimmed = debounced.trim()

  const searchQuery = useTmdbQuery(
    (signal) => SearchApi.multiSearch(trimmed, signal),
    [trimmed],
    trimmed.length > 0,
  )

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    const term = query.trim()
    if (term) setRecent(addRecentSearch(term))
  }

  const handleClear = () => {
    clearRecentSearches()
    setRecent([])
  }

  const results = searchQuery.data?.results ?? []
  const movies = results.filter((result) => result.media_type === 'movie')
  const tvShows = results.filter((result) => result.media_type === 'tv')
  const people = results.filter((result) => result.media_type === 'person')

  const renderBody = () => {
    if (!trimmed) {
      return <RecentSearches terms={recent} onSelect={setQuery} onClear={handleClear} />
    }
    if (searchQuery.status === 'loading') return <Spinner />
    if (searchQuery.status === 'error') {
      return <ErrorState message={t('error')} onRetry={searchQuery.refetch} />
    }
    if (results.length === 0) {
      return <EmptyState message={t('empty', { query: trimmed })} />
    }
    return (
      <>
        <ResultGroup title={t('groups.movies')} results={movies} />
        <ResultGroup title={t('groups.tv')} results={tvShows} />
        <ResultGroup title={t('groups.people')} results={people} />
      </>
    )
  }

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <SearchBar>
          <SearchInput
            type="search"
            placeholder={t('placeholder')}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoFocus
          />
        </SearchBar>
      </form>
      {renderBody()}
    </Page>
  )
}

export default SearchPage