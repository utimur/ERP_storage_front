class DeliveryCompanyRepository {
  constructor () {
    this._companies = {
      1: {
        id: 1,
        name: 'Planet Express',
        price: 200.0
      },
      2: {
        id: 2,
        name: 'Best Delivery #1',
        price: 200.0
      },
      3: {
        id: 3,
        name: 'DeliverZILLA',
        price: 200.0
      }
    }
  }

  async create (comp) {
    const newId = Math.max(...Object.keys(this._companies).map(id => parseInt(id))) + 1
    this._companies[newId] = {
      ...comp,
      id: newId
    }
    return { ...this._companies[newId] }
  }

  async get (filter = {}) {
    // simple deep copy
    const data = JSON.parse(JSON.stringify(Object.values(this._companies)))
    return { data }
  }

  async getById (id) {
    return this._companies[id]
  }
}

export default DeliveryCompanyRepository
