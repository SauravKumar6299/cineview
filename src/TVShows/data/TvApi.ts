import { tmdbGet } from '../../Common'
import { seasonDetailSchema, tvDetailSchema } from './schemas/Tv.schemas'

export const TvApi = {
  getTvDetail: (tvId: number, signal?: AbortSignal) =>
    tmdbGet(`/tv/${tvId}`, tvDetailSchema, { append_to_response: 'videos,credits' }, signal),

  getSeasonDetail: (tvId: number, seasonNumber: number, signal?: AbortSignal) =>
    tmdbGet(`/tv/${tvId}/season/${seasonNumber}`, seasonDetailSchema, undefined, signal),
}