class TokenStore {
  set (token) {
    localStorage.setItem('token', token)
  }

  get () {
    return localStorage.getItem('token')
  }

  clear () {
    localStorage.removeItem('token')
  }
}

export default TokenStore
