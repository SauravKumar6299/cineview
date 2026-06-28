import { useContext } from 'react'
import { CollectionContext } from './CollectionContext'

export const useCollection = () => {
  const store = useContext(CollectionContext)
  if (!store) throw new Error('useCollection must be used within a CollectionProvider')
  return store
}