import { recentSearchesSchema } from './schemas/Search.schemas'

const STORAGE_KEY = 'cineview.recentSearches'
const MAX_ENTRIES = 8

export const readRecentSearches = (): string[] => {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return []
  try {
    const parsed = recentSearchesSchema.safeParse(JSON.parse(raw))
    return parsed.success ? parsed.data : []
  } catch {
    return []
  }
}

export const addRecentSearch = (term: string): string[] => {
  const existing = readRecentSearches().filter(
    (entry) => entry.toLowerCase() !== term.toLowerCase(),
  )
  const updated = [term, ...existing].slice(0, MAX_ENTRIES)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  return updated
}

export const clearRecentSearches = (): void => {
  localStorage.removeItem(STORAGE_KEY)
}