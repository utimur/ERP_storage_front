import { makeAutoObservable } from 'mobx'
import { roles } from '../../../utils/consts'

// OrderDialogStore is an adaptor for OrderStore to handle order form processing
class OrderDialogStore {
  get DeliveryExpectedAt () {
    return this._deliveryExpectedAt
  }

  set DeliveryExpectedAt (value) {
    this._deliveryExpectedAt = new Date(value)
    if (isNaN(this._deliveryExpectedAt.getTime())) {
      this._deliveryExpectedAt = new Date()
    }
  }

  get DeliveryCompanyId () {
    return this._deliveryCompanyId
  }

  set DeliveryCompanyId (value) {
    this._deliveryCompanyId = isNaN(parseInt(value)) ? '' : parseInt(value)
  }

  get Goods () {
    return Object.values(this._goodStore.Goods).map(
      g => ({ ...g, quantity: g.id in this._goods ? this._goods[g.id].quantity : 0 })
    )
  }

  get DeliveryCompanies () {
    return this._deliveryCompanyStore.DeliveryCompanies
  }

  get IsReady () {
    return this._goodStore.Goods !== null
  }

  get IsVisible () {
    return this._isVisible
  }

  set IsVisible (value) {
    this._isVisible = value
  }

  get Errors () {
    const errors = {}
    if (this._deliveryExpectedAt < new Date()) {
      errors.deliveryExpectedAt = 'Укажите более позднюю дату'
    }
    if (this._deliveryCompanyId === '') {
      errors.deliveryCompanyId = 'Выберите компанию'
    }
    if (Object.keys(this._goods).length === 0) {
      errors.goods = 'Складские единицы не выбраны'
    }
    return errors
  }

  get CanCreate () {
    return Object.keys(this.Errors).length === 0
  }

  get IsReadonly () {
    return this._userStore.Role !== roles.ADMIN
  }

  constructor (userStore, orderStore, goodStore, deliveryCompanyStore) {
    this._userStore = userStore
    this._orderStore = orderStore
    this._goodStore = goodStore
    this._deliveryCompanyStore = deliveryCompanyStore
    this._isVisible = false
    this._clear()
    makeAutoObservable(this)
  }

  toggleVisibility () {
    this._isVisible = !this._isVisible
  }

  async init (filter) {
    await this._goodStore.init(filter)
    await this._deliveryCompanyStore.init()
  }

  async create () {
    const order = {
      delivery_expected_at: this._deliveryExpectedAt / 1,
      delivery_company_id: this._deliveryCompanyId,
      goods: Object.values(this._goods)
    }
    await this._orderStore.create(order)
    this._clear()
    this.toggleVisibility()
  }

  setGoodQuantity (id, quantity) {
    quantity = isNaN(parseInt(quantity)) ? 0 : parseInt(quantity)
    quantity = Math.max(quantity, 0)
    if (quantity === 0) {
      delete this._goods[id]
    } else {
      this._goods[id] = { id, quantity }
    }
  }

  _clear () {
    this._deliveryExpectedAt = new Date()
    this._deliveryCompanyId = ''
    this._goods = {}
  }
}

export default OrderDialogStore
