class GoodRepository {
  constructor () {
    this._goods = {
      1: {
        id: 1,
        name: 'somegood1',
        code: 'somegood1',
        warehouse_id: 1
      },
      2: {
        id: 2,
        name: 'somegood2',
        code: 'somegood2',
        warehouse_id: 1
      },
      3: {
        id: 3,
        name: 'somegood3',
        code: 'somegood3',
        warehouse_id: 1
      }
    }
  }

  async create (good) {
    const newId = Math.max(...Object.keys(this._goods).map(id => parseInt(id))) + 1
    this._goods[newId] = {
      ...good,
      id: newId
    }
    return { ...this._goods[newId] }
  }

  async get (filter = {}) {
    // simple deep copy
    let data = JSON.parse(JSON.stringify(Object.values(this._goods)))
    if (filter.name !== undefined) {
      data = data.filter(o => o.name === filter.name)
    }
    if (filter.code !== undefined) {
      data = data.filter(o => o.code === filter.code)
    }
    return { data }
  }
}

export default GoodRepository
