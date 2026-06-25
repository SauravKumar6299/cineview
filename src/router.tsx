import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './Common'
import { LoginPage, ProtectedRoute } from './Auth'
import { HomePage, MovieDetailPage } from './Movies'
import { TVShowDetailPage, SeasonDetailPage } from './TVShows'
import { SearchPage } from './Search'
import { WatchlistPage, ListsPage, ListDetailPage } from './Collection'
import { SettingsPage } from './Preferences'
import NotFoundPage from './pages/NotFoundPage'

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/movie/:movieId', element: <MovieDetailPage /> },
          {
            path: '/tv/:tvId',
            element: <TVShowDetailPage />,
            children: [{ path: 'season/:seasonNumber', element: <SeasonDetailPage /> }],
          },
          { path: '/search', element: <SearchPage /> },
          { path: '/watchlist', element: <WatchlistPage /> },
          { path: '/lists', element: <ListsPage /> },
          { path: '/lists/:listId', element: <ListDetailPage /> },
          { path: '/settings', element: <SettingsPage /> },
        ],
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])