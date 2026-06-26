import { tmdbGet } from '../../Common'
import { multiSearchSchema } from './schemas/Search.schemas'

export const SearchApi = {
  multiSearch: (query: string, signal?: AbortSignal) =>
    tmdbGet('/search/multi', multiSearchSchema, { query, include_adult: false }, signal),
}