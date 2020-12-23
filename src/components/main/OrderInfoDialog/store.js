import { makeAutoObservable } from 'mobx'

class OrderInfoStore {
  get Order () {
    return this._order
  }

  get DeliveryCompany () {
    return this._deliveryCompany.name
  }

  get IsReady () {
    return this._order !== null && this._deliveryCompany !== null
  }

  constructor (orderStore, deliveryCompanyStore) {
    this._order = null
    this._deliveryCompany = null
    makeAutoObservable(this)
    this._orderStore = orderStore
    this._deliveryCompanyStore = deliveryCompanyStore
  }

  async init (id) {
    this._order = await this._orderStore.getById(id)
    this._deliveryCompany = await this._deliveryCompanyStore.getById(
      this._order.delivery_company_id
    )
  }

  clear () {
    this._order = null
  }
}

export default OrderInfoStore
