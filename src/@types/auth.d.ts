import { User } from './user'

export interface AuthDTO {
  user: User
  login?: () => (data: User) => Promise<void>
  logout?: () => () => void
}
