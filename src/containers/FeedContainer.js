import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { FeedContext, GlobalDependenciesContext } from '../contexts'
import FeedStore from '../components/main/Feed/store'
import DependenciesContainer from './DependenciesContainer'

const FeedContainer = observer(({ children }) => {
  const { dependencies: { userStore, orderStore } } = useContext(GlobalDependenciesContext)

  return (
    <DependenciesContainer
      context={FeedContext}
      factory={() => ({
        feedStore: new FeedStore(userStore, orderStore)
      })}
    >
      {children}
    </DependenciesContainer>
  )
})

export default FeedContainer
