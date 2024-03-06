import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes = ({ authenticated }: { authenticated: boolean | null }) => {
  if (authenticated) return <Navigate to='/secret' replace />

  return <Outlet />
}
