const baseUrl = import.meta.env.VITE_TMDB_BASE_URL
const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN
const imageBaseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL

if (!baseUrl || !accessToken || !imageBaseUrl) {
  throw new Error(
    'Missing TMDB environment variables. Ensure VITE_TMDB_BASE_URL, VITE_TMDB_ACCESS_TOKEN, and VITE_TMDB_IMAGE_BASE_URL are set in your .env file.',
  )
}

export const tmdbConfig = { baseUrl, accessToken, imageBaseUrl } as const