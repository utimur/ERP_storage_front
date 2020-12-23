import React, { useRef, useState } from 'react'
import TokenStore from '../stores/token'
import { RepositoryFactory } from '../repositories'
import DependenciesContext from './DependenciesContext'
import { serverAddress } from '../utils/consts'
import { StoreFactory } from '../stores'
import { FakeRepositoryFactory } from '../repositories/fake'

/*
  DependenciesContainer is the container of application global dependencies. It handles application
  livecycle and injects dependencies with different scopes.
*/
export const DependenciesContainer = ({ children }) => {
  // tokenStoreRef has DependenciesContainer scope, which is almost a singleton
  const tokenStoreRef = useRef(new TokenStore())
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
    ) : new RepositoryFactory(repoConfig, tokenStoreRef.current)
  )

  // userBoundStoresClearHandler recreates dependencies on user logout and e.t.c.
  const userBoundStoresClearHandler = () => {
    tokenStoreRef.current.clear()
    setUserStore(
      publicStoreFactory.createUserStore(tokenStoreRef.current, userBoundStoresClearHandler)
    )
    setOrderStore(
      privateStoreFactory.createOrderStore()
    )
    setGoodStore(
      privateStoreFactory.createGoodStore()
    )
    setDeliveryCompanyStore(
      privateStoreFactory.createDeliveryCompanyStore()
    )
  }
  const [userStore, setUserStore] = useState(
    publicStoreFactory.createUserStore(tokenStoreRef.current, userBoundStoresClearHandler)
  )
  const [orderStore, setOrderStore] = useState(
    privateStoreFactory.createOrderStore()
  )
  const [goodStore, setGoodStore] = useState(
    privateStoreFactory.createGoodStore()
  )
  const [deliveryCompanyStore, setDeliveryCompanyStore] = useState(
    privateStoreFactory.createDeliveryCompanyStore()
  )

  const deps = {
    userStore,
    orderStore,
    goodStore,
    deliveryCompanyStore
  }

  return (
    <DependenciesContext.Provider value={deps}>
      {children}
    </DependenciesContext.Provider>
  )
}

export default DependenciesContainer
