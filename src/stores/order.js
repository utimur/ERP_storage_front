import { makeAutoObservable } from 'mobx'

class OrderStore {
  get Orders () {
    return this._orders
  }

  constructor (orderRepo) {
    this._orderRepo = orderRepo
    this._orders = null
    makeAutoObservable(this)
  }

  async init (filter) {
    const { data } = await this._orderRepo.get(filter)
    const orders = {}
    data.forEach(o => { orders[o.id] = o })
    this._orders = orders
  }

  async create (order) {
    order = await this._orderRepo.create(order)
    this._orders[order.id] = order
  }

  async updateStatus (id, status) {
    await this._orderRepo.updateStatus(id, status)
    this._orders[id].status = status
  }

  getByStatus (status) {
    return Object.values(this._orders).filter(o => o.status === status)
  }

  async getById (id) {
    return await this._orderRepo.getById(id)
  }
}

export default OrderStore
