import { useState, type ReactNode } from 'react'
import { CollectionContext } from './CollectionContext'
import { CollectionStore } from './CollectionStore'

interface CollectionProviderProps {
  children: ReactNode
}

export const CollectionProvider = ({ children }: CollectionProviderProps) => {
  const [store] = useState(() => new CollectionStore())

  return <CollectionContext.Provider value={store}>{children}</CollectionContext.Provider>
}