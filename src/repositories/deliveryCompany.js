import { buildQueryString } from '../utils/queryBuilder'

class DeliveryCompanyRepository {
  constructor (host) {
    this._host = host
  }

  async create (comp) {
    const { data } = await this._host.post('/api/delivery_companies', comp)
    return data
  }

  async get (filter = {}) {
    const { data } = await this._host.get(`/api/delivery_companies?${buildQueryString(filter)}`)
    return data
  }

  async getById (id) {
    const { data } = await this._host.get(`/api/delivery_companies/${id}`)
    return data
  }
}

export default DeliveryCompanyRepository
