import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = ({ authenticated }: { authenticated: boolean | null }) => {
  if (!authenticated) return <Navigate to='/login' replace />

  return <Outlet />
}
