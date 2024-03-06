import { Secret } from '@/pages/homepage'
import { Login } from '@/pages/login'
import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoute'
import { PublicRoutes } from './PublicRoute'
// ...

export default function RoutesWrap() {
  const { authenticated } = useContext(AuthContext)

  const routes = useRoutes([
    {
      element: <PublicRoutes authenticated={authenticated} />,
      children: [
        {
          path: '/',
          element: <Navigate to={'/login'} />
        },
        {
          path: '/login',
          element: authenticated ? <Navigate to={'/secret'} /> : <Login />
        }
      ]
    },
    {
      element: <PrivateRoutes authenticated={authenticated} />,
      children: [
        {
          path: '/secret',
          element: <Secret />
        }
      ]
    }
  ])
  return routes
}
