import AuthRepository from './auth'
import GoodRepository from './good'
import OrderRepository from './order'
import UserRepository from './user'
import buildHost from './hostBuilder'
import DeliveryCompanyRepository from './deliveryCompany'

export class RepositoryFactory {
  constructor (config, tokenStore = null) {
    this._host = buildHost(config, tokenStore)
  }

  createAuthRepository () {
    return new AuthRepository(this._host)
  }

  createUserRepository () {
    return new UserRepository(this._host)
  }

  createOrderRepository () {
    return new OrderRepository(this._host)
  }

  createGoodRepository () {
    return new GoodRepository(this._host)
  }

  createDeliveryCompanyRepository () {
    return new DeliveryCompanyRepository(this._host)
  }

  createWarehouseRepository () {
    throw Error('Not implemented')
  }

  createDocumentRepository () {
    throw Error('Not implemented')
  }
}
