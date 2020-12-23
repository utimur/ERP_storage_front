class AuthRepository {
  constructor (host) {
    this._host = host
  }

  async auth (username, password) {
    const { data: { token } } = await this._host.post('/api/auth', {
      username, password
    })
    return token
  }
}

export default AuthRepository
