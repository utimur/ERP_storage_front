class OrderRepository {
  constructor () {
    this._orders = {
      1: {
        id: 1,
        created_at: 1609101124580,
        user_id: 1,
        status: 'created',
        delivery_expected_at: 1609101124580,
        delivery_company_id: 1
      },
      2: {
        id: 2,
        created_at: 1609101124580,
        user_id: 1,
        status: 'formalizing',
        delivery_expected_at: 1609101124580,
        delivery_company_id: 1
      },
      3: {
        id: 3,
        created_at: 1609101124580,
        user_id: 2,
        status: 'collecting',
        delivery_expected_at: 1609101124580,
        delivery_company_id: 1
      }
    }
  }

  async create (order) {
    const newId = Math.max(...Object.keys(this._orders).map(id => parseInt(id))) + 1
    this._orders[newId] = { ...order, id: newId, status: 'created', created_at: new Date() / 1, user_id: 1 }
    return { ...this._orders[newId] }
  }

  async get (filter = {}) {
    // simple deep copy
    let data = JSON.parse(JSON.stringify(Object.values(this._orders)))
    if (filter.status !== undefined) {
      data = data.filter(o => o.status === filter.status)
    }
    return { data }
  }

  async getById (id) {
    return {
      ...this._orders[id],
      goods: [
        {
          id: 1,
          name: 'testgood1',
          code: 'somecode1',
          quantity: 1,
          warehouse_id: 1
        },
        {
          id: 2,
          name: 'testgood2',
          code: 'somecode2',
          quantity: 1,
          warehouse_id: 1
        },
        {
          id: 3,
          name: 'testgood3',
          code: 'somecode3',
          quantity: 1,
          warehouse_id: 1
        }
      ]
    }
  }

  async updateStatus (id, status) {
    this._orders[id].status = status
  }
}

export default OrderRepository
