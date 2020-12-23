import tokens from './fakeTokens'
import jwtDecode from 'jwt-decode'

class AuthRepository {
  async auth (username, password) {
    return tokens.filter(t => jwtDecode(t).username === username)[0]
  }
}

export default AuthRepository
