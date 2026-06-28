import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './Auth'
import { PreferencesProvider } from './Preferences'
import { router } from './router'
import { CollectionProvider } from './Collection'

const App = () => (
  <PreferencesProvider>
    <AuthProvider>
      <CollectionProvider>
        <RouterProvider router={router} />
      </CollectionProvider>
    </AuthProvider>
  </PreferencesProvider>
)

export default App