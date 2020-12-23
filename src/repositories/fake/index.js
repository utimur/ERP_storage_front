import AuthRepository from './auth'
import GoodRepository from './good'
import OrderRepository from './order'
import UserRepository from './user'
import DeliveryCompanyRepository from './deliveryCompany'

export class FakeRepositoryFactory {
  createAuthRepository () {
    return new AuthRepository()
  }

  createUserRepository () {
    return new UserRepository()
  }

  createOrderRepository () {
    return new OrderRepository()
  }

  createGoodRepository () {
    return new GoodRepository()
  }

  createDeliveryCompanyRepository () {
    return new DeliveryCompanyRepository()
  }

  createWarehouseRepository () {
    throw Error('Not implemented')
  }

  createDocumentRepository () {
    throw Error('Not implemented')
  }
}
