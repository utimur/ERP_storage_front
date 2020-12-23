import UserStore from './user'
import OrderStore from './order'
import GoodStore from './good'
import DeliveryCompanyStore from './deliveryCompany'

export class StoreFactory {
  constructor (repositoryFactory) {
    this._repoFactory = repositoryFactory
  }

  createUserStore (tokenStore, userBoundStoresClearHandler) {
    return new UserStore(
      this._repoFactory.createAuthRepository(),
      this._repoFactory.createUserRepository(),
      tokenStore,
      userBoundStoresClearHandler
    )
  }

  createOrderStore () {
    return new OrderStore(
      this._repoFactory.createOrderRepository()
    )
  }

  createGoodStore () {
    return new GoodStore(
      this._repoFactory.createGoodRepository()
    )
  }

  createDeliveryCompanyStore () {
    return new DeliveryCompanyStore(
      this._repoFactory.createDeliveryCompanyRepository()
    )
  }
}
