import tokens from './fakeTokens'
import jwtDecode from 'jwt-decode'

class UserRepository {
  async create (username, password, role) {
    return tokens.filter(t => jwtDecode(t).username === username)[0]
  }
}

export default UserRepository
