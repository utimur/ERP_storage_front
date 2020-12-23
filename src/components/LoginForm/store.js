import { makeAutoObservable } from 'mobx'
import { validate } from '../validate'

class LoginFormStore {
    _username = ''
    _password = ''
    _usernameErr = null
    _passwordErr = null

    constructor () {
      makeAutoObservable(this)
    }

    get Username () {
      return this._username
    }

    set Username (value) {
      this._validateUsername(value)
      this._username = value
    }

    get Password () {
      return this._password
    }

    set Password (value) {
      this._validatePassword(value)
      this._password = value
    }

    get UsernameError () {
      return this._usernameErr
    }

    get PasswordError () {
      return this._passwordErr
    }

    get CanLogin () {
      return this._usernameErr === null && this._passwordErr === null
    }

    _validateUsername (value) {
      this._usernameErr = null
      try {
        validate(value, { isEmpty: false, minLength: 8 })
      } catch (e) {
        this._usernameErr = e.message
      }
    }

    _validatePassword (value) {
      this._passwordErr = null
      try {
        validate(value, { isEmpty: false, minLength: 8 })
      } catch (e) {
        this._passwordErr = e.message
      }
    }
}

export default LoginFormStore
