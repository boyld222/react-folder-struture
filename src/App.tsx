import './App.css'
import './i18n/i18n'
import { AuthProvider } from './providers/AuthProvider'
import Routes from './routes/routes'

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
