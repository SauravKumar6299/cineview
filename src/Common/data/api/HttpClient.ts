import type { ZodType } from 'zod'
import { tmdbConfig } from './tmdbConfig'
import { getRequestLanguage, getRequestRegion } from './requestContext'

export class TmdbApiError extends Error {
  readonly status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'TmdbApiError'
    this.status = status
  }
}

export type QueryParams = Record<string, string | number | boolean | undefined>

const buildUrl = (path: string, params: QueryParams = {}): string => {
    const url = new URL(`${tmdbConfig.baseUrl}${path}`)
    const merged: QueryParams = {
      language: getRequestLanguage(),
      region: getRequestRegion(),
      ...params,
    }
    for (const [key, value] of Object.entries(merged)) {
      if (value !== undefined) url.searchParams.set(key, String(value))
    }
    return url.toString()
  }

export const tmdbGet = async <T>(
  path: string,
  schema: ZodType<T>,
  params?: QueryParams,
  signal?: AbortSignal,
): Promise<T> => {
  const response = await fetch(buildUrl(path, params), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${tmdbConfig.accessToken}`,
      accept: 'application/json',
    },
    signal,
  })

  if (!response.ok) {
    throw new TmdbApiError(`TMDB request failed for ${path}`, response.status)
  }

  const json: unknown = await response.json()
  return schema.parse(json)
}