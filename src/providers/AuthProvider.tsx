import { useLocalStorage } from '@/hooks/useLocalStorage'
import { createContext, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  children?: ReactNode
}

type IAuthContext = {
  authenticated: boolean | null
  setAuthenticated: (newState: boolean) => void
  login: () => void
  logout: () => void
}

const initialValue = {
  authenticated: null,
  setAuthenticated: () => {},
  login: () => {},
  logout: () => {}
}

const AuthContext = createContext<IAuthContext>(initialValue)

const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useLocalStorage<boolean | null>('user', null)
  const navigate = useNavigate()

  const login = async () => {
    setAuthenticated(true)
    navigate('/secret')
  }

  const logout = () => {
    setAuthenticated(false)
    navigate('/', { replace: true })
  }
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, login, logout }}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
