import { buildQueryString } from '../utils/queryBuilder'

class OrderRepository {
  constructor (host) {
    this._host = host
  }

  async create (order) {
    const { data } = await this._host.post('/api/orders', order)
    return data
  }

  async get (filter = {}) {
    const { data } = await this._host.get(`/api/orders?${buildQueryString(filter)}`)
    return data
  }

  async getById (id) {
    const { data } = await this._host.get(`/api/orders/${id}`)
    return data
  }

  async updateStatus (id, status) {
    await this._host.post(`/api/orders/${id}/update_status`, { status })
  }
}

export default OrderRepository
