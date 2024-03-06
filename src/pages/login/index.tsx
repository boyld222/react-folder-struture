import { AuthContext } from '@/providers/AuthProvider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const { login } = useContext(AuthContext)

  const navigate = useNavigate()
  const handleLogin = () => {
    login()
    navigate('/secret')
  }
  return (
    <div>
      <button onClick={() => handleLogin()}>Authenticate</button>
    </div>
  )
}
