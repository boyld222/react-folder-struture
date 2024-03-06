// import { useAuth } from '@/hooks/useAuth'

import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'

export const Secret = () => {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <h1>This is a Secret page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
