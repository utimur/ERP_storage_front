class TokenStore {
  set (token) {
    window.localStorage.setItem('token', token)
  }

  get () {
    return window.localStorage.getItem('token')
  }

  clear () {
    window.localStorage.removeItem('token')
  }
}

export default TokenStore
