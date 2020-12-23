import { buildQueryString } from '../utils/queryBuilder'

class GoodRepository {
  constructor (host) {
    this._host = host
  }

  async create (good) {
    const { data } = await this._host.post('/api/goods', good)
    return data
  }

  async get (filter = {}) {
    const { data } = await this._host.get(`/api/goods?${buildQueryString(filter)}`)
    return data
  }

  async getById (id) {
    const { data } = await this._host.get(`/api/goods/${id}`)
    return data
  }
}

export default GoodRepository
