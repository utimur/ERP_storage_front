import React from 'react'
import TokenStore from '../stores/token'
import { serverAddress } from '../utils/consts'
import { StoreFactory } from '../stores'
import { FakeRepositoryFactory } from '../repositories/fake'
import { RepositoryFactory } from '../repositories'
import DependenciesContainer from './DependenciesContainer'
import { GlobalDependenciesContext } from '../contexts'

const globalDependenciesFactory = () => {
  // tokenStoreRef has DependenciesContainer scope, which is almost a singleton
  const tokenStore = new TokenStore()
  const repoConfig = {
    baseURL: serverAddress
  }
  // publicStoreFactory used for public resources instantiating
  const publicStoreFactory = new StoreFactory(
    process.env.REACT_APP_ENV === 'development' ? (
      new FakeRepositoryFactory()
    ) : new RepositoryFactory(repoConfig)
  )
  // privateStoreFactory used for private resources instantiating. It might be some token-dependent
  // data storages
  const privateStoreFactory = new StoreFactory(
    process.env.REACT_APP_ENV === 'development' ? (
      new FakeRepositoryFactory()
    ) : new RepositoryFactory(repoConfig, tokenStore)
  )

  return {
    tokenStore,
    userStore: publicStoreFactory.createUserStore(tokenStore),
    orderStore: privateStoreFactory.createOrderStore(),
    goodStore: privateStoreFactory.createGoodStore(),
    deliveryCompanyStore: privateStoreFactory.createDeliveryCompanyStore()
  }
}

const GlobalDependenciesContainer = ({ children }) => (
  <DependenciesContainer
    context={GlobalDependenciesContext}
    factory={globalDependenciesFactory}
  >
    {children}
  </DependenciesContainer>
)

export default GlobalDependenciesContainer
