import { tmdbConfig } from '../data/api/tmdbConfig'

export const buildImageUrl = (
  path: string | null | undefined,
  size: string = 'w500',
): string | null => {
  if (!path) return null
  return `${tmdbConfig.imageBaseUrl}/${size}${path}`
}