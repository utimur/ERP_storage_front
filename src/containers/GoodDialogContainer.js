import React, { useContext } from 'react'
import { GlobalDependenciesContext, GoodDialogContext } from '../contexts'
import GoodDialogStore from '../components/main/GoodDialog/store'
import DependenciesContainer from './DependenciesContainer'

const GoodDialogContainer = ({ children }) => {
  const {
    dependencies: { goodStore }
  } = useContext(GlobalDependenciesContext)

  return (
    <DependenciesContainer
      context={GoodDialogContext}
      factory={() => ({
        goodDialogStore: new GoodDialogStore(goodStore)
      })}
    >
      {children}
    </DependenciesContainer>
  )
}

export default GoodDialogContainer
