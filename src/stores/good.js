import { makeAutoObservable } from 'mobx'

class GoodStore {
  get Goods () {
    return this._goods
  }

  constructor (goodRepo) {
    makeAutoObservable(this)
    this._goods = null
    this._goodRepo = goodRepo
  }

  async init (filter) {
    const { data } = await this._goodRepo.get(filter)
    const goods = {}
    data.forEach(g => goods[g.id] = g)
    this._goods = goods
  }

  async create (good) {
    this._goods[good.id] = await this._goodRepo.create(good)
  }

  getById (id) {
    return this._goods[id]
  }
}

export default GoodStore
