import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './Auth'
import { PreferencesProvider } from './Preferences'
import { router } from './router'

const App = () => (
  <PreferencesProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </PreferencesProvider>
)

export default App