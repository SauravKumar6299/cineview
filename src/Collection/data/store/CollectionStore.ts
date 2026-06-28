import { makeAutoObservable, reaction } from 'mobx'
import type {
  CustomList,
  EpisodeProgress,
  MediaSnapshot,
  MediaType,
  WatchStatus,
  WatchlistEntry,
} from '../../core/types/Collection.types'
import { readCollectionState, writeCollectionState } from '../persistence/Collection.persistence'

export class CollectionStore {
  watchlist: WatchlistEntry[] = []
  lists: CustomList[] = []
  episodeProgress: EpisodeProgress[] = []

  constructor() {
    const persisted = readCollectionState()
    this.watchlist = persisted.watchlist
    this.lists = persisted.lists
    this.episodeProgress = persisted.episodeProgress

    makeAutoObservable(this, {}, { autoBind: true })

    reaction(
      () => ({
        watchlist: this.watchlist.map((entry) => ({ ...entry })),
        lists: this.lists.map((list) => ({
          ...list,
          items: list.items.map((item) => ({ ...item })),
        })),
        episodeProgress: this.episodeProgress.map((progress) => ({ ...progress })),
      }),
      () => this.persist(),
    )
  }

  get totalWatchlistCount() {
    return this.watchlist.length
  }

  get wantToWatchCount() {
    return this.countByStatus('want_to_watch')
  }

  get watchingCount() {
    return this.countByStatus('watching')
  }

  get completedCount() {
    return this.countByStatus('completed')
  }

  getEntry(mediaType: MediaType, mediaId: number) {
    return this.watchlist.find((entry) => entry.mediaType === mediaType && entry.mediaId === mediaId) ?? null
  }

  isInWatchlist(mediaType: MediaType, mediaId: number) {
    return this.getEntry(mediaType, mediaId) !== null
  }

  toggleWatchlist(snapshot: MediaSnapshot) {
    const existing = this.getEntry(snapshot.mediaType, snapshot.id)
    if (existing) {
      this.remove(existing.id)
      return
    }

    this.add(snapshot)
  }

  add(snapshot: MediaSnapshot) {
    if (this.isInWatchlist(snapshot.mediaType, snapshot.id)) return

    const now = new Date().toISOString()

    this.watchlist.push({
      id: crypto.randomUUID(),
      mediaId: snapshot.id,
      mediaType: snapshot.mediaType,
      status: 'want_to_watch',
      note: '',
      snapshot,
      createdAt: now,
      updatedAt: now,
    })
  }

  remove(entryId: string) {
    const entry = this.watchlist.find((item) => item.id === entryId)
    if (!entry) return

    this.watchlist = this.watchlist.filter((item) => item.id !== entryId)

    if (entry.mediaType === 'tv') {
      this.episodeProgress = this.episodeProgress.filter((progress) => progress.tvId !== entry.mediaId)
    }
  }

  updateStatus(entryId: string, status: WatchStatus) {
    const entry = this.watchlist.find((item) => item.id === entryId)
    if (!entry) return

    entry.status = status
    entry.updatedAt = new Date().toISOString()
  }

  updateNote(entryId: string, note: string) {
    const entry = this.watchlist.find((item) => item.id === entryId)
    if (!entry) return

    entry.note = note.slice(0, 300)
    entry.updatedAt = new Date().toISOString()
  }

  createList(name: string, description = '') {
    const trimmedName = name.trim().slice(0, 60)
    if (!trimmedName) return null

    const now = new Date().toISOString()
    const list: CustomList = {
      id: crypto.randomUUID(),
      name: trimmedName,
      description: description.trim(),
      items: [],
      createdAt: now,
      updatedAt: now,
    }

    this.lists.push(list)
    return list
  }

  renameList(listId: string, name: string) {
    const list = this.getList(listId)
    const trimmedName = name.trim().slice(0, 60)
    if (!list || !trimmedName) return

    list.name = trimmedName
    list.updatedAt = new Date().toISOString()
  }

  updateListDescription(listId: string, description: string) {
    const list = this.getList(listId)
    if (!list) return

    list.description = description.trim()
    list.updatedAt = new Date().toISOString()
  }

  deleteList(listId: string) {
    this.lists = this.lists.filter((list) => list.id !== listId)
  }

  getList(listId: string) {
    return this.lists.find((list) => list.id === listId) ?? null
  }

  isInList(listId: string, mediaType: MediaType, mediaId: number) {
    const list = this.getList(listId)
    return list?.items.some((item) => item.mediaType === mediaType && item.mediaId === mediaId) ?? false
  }

  toggleListItem(listId: string, snapshot: MediaSnapshot) {
    if (this.isInList(listId, snapshot.mediaType, snapshot.id)) {
      this.removeFromList(listId, snapshot.mediaType, snapshot.id)
      return
    }

    this.addToList(listId, snapshot)
  }

  addToList(listId: string, snapshot: MediaSnapshot) {
    const list = this.getList(listId)
    if (!list || this.isInList(listId, snapshot.mediaType, snapshot.id)) return

    list.items.push({
      id: crypto.randomUUID(),
      mediaId: snapshot.id,
      mediaType: snapshot.mediaType,
      snapshot,
      addedAt: new Date().toISOString(),
    })
    list.updatedAt = new Date().toISOString()
  }

  removeFromList(listId: string, mediaType: MediaType, mediaId: number) {
    const list = this.getList(listId)
    if (!list) return

    list.items = list.items.filter((item) => item.mediaType !== mediaType || item.mediaId !== mediaId)
    list.updatedAt = new Date().toISOString()
  }

  getSeasonProgress(tvId: number, seasonNumber: number) {
    return (
      this.episodeProgress.find(
        (progress) => progress.tvId === tvId && progress.seasonNumber === seasonNumber,
      ) ?? null
    )
  }

  isEpisodeWatched(tvId: number, seasonNumber: number, episodeId: number) {
    return this.getSeasonProgress(tvId, seasonNumber)?.watchedEpisodeIds.includes(episodeId) ?? false
  }

  toggleEpisode(tvId: number, seasonNumber: number, episodeId: number) {
    const progress = this.ensureSeasonProgress(tvId, seasonNumber)

    if (progress.watchedEpisodeIds.includes(episodeId)) {
      progress.watchedEpisodeIds = progress.watchedEpisodeIds.filter((id) => id !== episodeId)
    } else {
      progress.watchedEpisodeIds.push(episodeId)
    }

    progress.updatedAt = new Date().toISOString()
  }

  markSeason(tvId: number, seasonNumber: number, episodeIds: number[]) {
    const progress = this.ensureSeasonProgress(tvId, seasonNumber)
    progress.watchedEpisodeIds = [...new Set(episodeIds)]
    progress.updatedAt = new Date().toISOString()
  }

  unmarkSeason(tvId: number, seasonNumber: number) {
    const progress = this.getSeasonProgress(tvId, seasonNumber)
    if (!progress) return

    progress.watchedEpisodeIds = []
    progress.updatedAt = new Date().toISOString()
  }

  getWatchedEpisodeCount(tvId: number) {
    return this.episodeProgress
      .filter((progress) => progress.tvId === tvId)
      .reduce((total, progress) => total + progress.watchedEpisodeIds.length, 0)
  }

  private ensureSeasonProgress(tvId: number, seasonNumber: number) {
    const existing = this.getSeasonProgress(tvId, seasonNumber)
    if (existing) return existing

    const progress: EpisodeProgress = {
      tvId,
      seasonNumber,
      watchedEpisodeIds: [],
      updatedAt: new Date().toISOString(),
    }

    this.episodeProgress.push(progress)
    return progress
  }

  private countByStatus(status: WatchStatus) {
    return this.watchlist.filter((entry) => entry.status === status).length
  }

  private persist() {
    writeCollectionState({
      version: 2,
      watchlist: this.watchlist,
      lists: this.lists,
      episodeProgress: this.episodeProgress,
    })
  }
}