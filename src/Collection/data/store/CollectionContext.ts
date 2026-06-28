import { createContext } from 'react'
import type { CollectionStore } from './CollectionStore'

export const CollectionContext = createContext<CollectionStore | null>(null)