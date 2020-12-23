class UserRepository {
  constructor (host) {
    this._host = host
  }

  async create (username, password, role) {
    const { data: { token } } = await this._host.post('/api/users', {
      username, password, role
    })
    return token
  }
}

export default UserRepository
