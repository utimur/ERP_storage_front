import { makeAutoObservable } from 'mobx'

// GoodDialogStore is an adaptor for GoodStore to handle good form processing
class GoodDialogStore {
  get Name () {
    return this._name
  }

  set Name (value) {
    this._name = value
  }

  get Code () {
    return this._code
  }

  set Code (value) {
    this._code = value
  }

  get IsVisible () {
    return this._isVisible
  }

  get Errors () {
    const errors = {}
    if (this._name === '') {
      errors.name = 'Наименование единицы не может быть пустым'
    }
    if (this._code === '') {
      errors.code = 'Код единицы не должен быть пустым'
    }
    return errors
  }

  get CanCreate () {
    return Object.keys(this.Errors).length === 0
  }

  constructor (goodStore) {
    this._goodStore = goodStore
    this._isVisible = false
    this._clear()
    makeAutoObservable(this)
  }

  toggleVisibility () {
    this._isVisible = !this._isVisible
  }

  async create () {
    const good = {
      name: this._name,
      code: this._code
    }
    await this._goodStore.create(good)
    this._clear()
    this.toggleVisibility()
  }

  _clear () {
    this._name = ''
    this._code = ''
  }
}

export default GoodDialogStore
