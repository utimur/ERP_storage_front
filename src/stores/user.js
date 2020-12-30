import { makeAutoObservable } from 'mobx'
import jwtDecode from 'jwt-decode'

class UserStore {
  get Id () {
    return this._id
  }

  get Role () {
    return this._role
  }

  get IsAuthorized () {
    return this._role !== null
  }

  constructor (authRepo, userRepo, tokenStore) {
    this._id = null
    this._role = null
    makeAutoObservable(this)
    this._tokenStore = tokenStore
    this._authRepo = authRepo
    this._userRepo = userRepo

    const token = this._tokenStore.get()
    if (token !== null) {
      try {
        this._parseToken(token)
      } catch {
        this.logout()
      }
    }
  }

  logout () {
    this._tokenStore.clear()
  }

  async login (username, password) {
    this._configure(
      await this._authRepo.auth(username, password)
    )
  }

  async registration (username, password, role) {
    this._configure(
      await this._userRepo.create(username, password, role)
    )
  }

  _configure (token) {
    this._tokenStore.set(token)
    try {
      this._parseToken(token)
    } catch {
      this.logout()
    }
  }

  _parseToken (token) {
    const decoded = jwtDecode(token)
    this._id = decoded.id
    this._role = decoded.role
  }
}

export default UserStore
