import { useState } from 'react'
import type { ReactNode } from 'react'
import { PreferencesStore } from './PreferencesStore'
import { PreferencesContext } from './PreferencesContext'

export const PreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(() => new PreferencesStore())
  return <PreferencesContext.Provider value={store}>{children}</PreferencesContext.Provider>
}