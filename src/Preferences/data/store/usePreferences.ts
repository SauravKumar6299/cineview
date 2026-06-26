import { useContext } from 'react'
import { PreferencesContext } from './PreferencesContext'

export const usePreferences = () => {
  const store = useContext(PreferencesContext)
  if (!store) throw new Error('usePreferences must be used within a PreferencesProvider')
  return store
}