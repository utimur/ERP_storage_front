import { makeAutoObservable } from 'mobx'
import { roles } from '../../utils/consts'
import { validate } from '../validate'

class RegistrationFormStore {
  constructor () {
    this._role = roles.CLIENT
    this._username = ''
    this._password = ''
    makeAutoObservable(this)
  }

  get Username () {
    return this._username
  }

  set Username (value) {
    this._username = value
  }

  get Password () {
    return this._password
  }

  set Password (value) {
    this._password = value
  }

  get Errors () {
    const errors = {}
    try {
      validate(this._username, { isEmpty: false, minLength: 8 })
    } catch (e) {
      errors.username = e.message
    }
    try {
      validate(this._password, { isEmpty: false, minLength: 8 })
    } catch (e) {
      errors.password = e.message
    }
    return errors
  }

  get Role () {
    return this._role
  }

  set Role (value) {
    this._role = value
  }

  get CanRegister () {
    return Object.keys(this.Errors).length === 0
  }
}

export default RegistrationFormStore
