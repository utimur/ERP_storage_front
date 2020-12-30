import { makeAutoObservable } from 'mobx'

class DeliveryCompanyStore {
  get DeliveryCompanies () {
    return Object.values(this._deliveryCompanies)
  }

  constructor (deliveryCompanyRepo) {
    this._deliveryCompanies = {}
    makeAutoObservable(this)
    this._deliveryCompanyRepo = deliveryCompanyRepo
  }

  async init () {
    const { data } = await this._deliveryCompanyRepo.get()
    const companies = {}
    data.forEach(o => { companies[o.id] = o })
    this._deliveryCompanies = companies
  }

  async create (comp) {
    comp = await this._deliveryCompanyRepo.create(comp)
    this._deliveryCompanies[comp.id] = comp
  }

  async getById (id) {
    return await this._deliveryCompanyRepo.getById(id)
  }
}

export default DeliveryCompanyStore
