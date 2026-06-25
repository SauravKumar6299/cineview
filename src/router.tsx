import { createBrowserRouter } from 'react-router-dom'
import { HomePage, MovieDetailPage } from './Movies'
import { TVShowDetailPage, SeasonDetailPage } from './TVShows'
import { LoginPage } from './Auth'
import { SearchPage } from './Search'
import { WatchlistPage, ListsPage, ListDetailPage } from './Collection'
import { SettingsPage } from './Preferences'
import NotFoundPage from './pages/NotFoundPage'

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <HomePage /> },
  { path: '/movie/:movieId', element: <MovieDetailPage /> },
  {
    path: '/tv/:tvId',
    element: <TVShowDetailPage />,
    children: [
      { path: 'season/:seasonNumber', element: <SeasonDetailPage /> },
    ],
  },
  { path: '/search', element: <SearchPage /> },
  { path: '/watchlist', element: <WatchlistPage /> },
  { path: '/lists', element: <ListsPage /> },
  { path: '/lists/:listId', element: <ListDetailPage /> },
  { path: '/settings', element: <SettingsPage /> },
  { path: '*', element: <NotFoundPage /> },
])