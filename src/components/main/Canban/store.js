import { makeAutoObservable } from 'mobx'
import { roles, statuses } from '../../../utils/consts'

// CanbanStore is an adaptor for OrderStore to handle canban processing
class CanbanStore {
  get Boards () {
    return Object.values(statuses).map(
      status => (
        { status, orders: Object.values(this._orderStore.Orders).filter(o => o.status === status) }
      )
    )
  }

  get IsDragging () {
    return this._draggingOrderId !== null
  }

  get DraggingOrderId () {
    return this._draggingOrderId
  }

  get IsReady () {
    return this._orderStore.Orders !== null
  }

  get IsReadonly () {
    return this._userStore.Role !== roles.ADMIN
  }

  constructor (userStore, orderStore) {
    this._userStore = userStore
    this._orderStore = orderStore
    this._draggingOrderId = null
    makeAutoObservable(this)
  }

  async init () {
    // TODO: add pagination
    const filter = {}
    if (this._userStore.Role !== roles.ADMIN) {
      filter.username = this._userStore.Id
    }
    await this._orderStore.init(filter)
  }

  startDrag (orderId) {
    this._draggingOrderId = orderId
  }

  endDrag (status) {
    this._orderStore.updateStatus(this._draggingOrderId, status)
    this._draggingOrderId = null
  }
}

export default CanbanStore
