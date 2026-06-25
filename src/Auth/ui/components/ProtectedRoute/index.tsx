import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../../data/context/useAuth'

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return <Outlet />
}

export default ProtectedRoute