import React, { useContext } from 'react'
import { CanbanContext, GlobalDependenciesContext } from '../contexts'
import CanbanStore from '../components/main/Canban/store'

import DependenciesContainer from './DependenciesContainer'
import OrderInfoStore from '../components/main/OrderInfoDialog/store'
import OrderDialogStore from '../components/main/OrderDialog/store'

const CanbanContainer = ({ children }) => {
  const {
    dependencies: { userStore, orderStore, goodStore, deliveryCompanyStore }
  } = useContext(GlobalDependenciesContext)

  return (
    <DependenciesContainer
      context={CanbanContext}
      factory={() => ({
        canbanStore: new CanbanStore(userStore, orderStore),
        orderInfoStore: new OrderInfoStore(orderStore, deliveryCompanyStore),
        orderDialogStore: new OrderDialogStore(userStore, orderStore, goodStore, deliveryCompanyStore)
      })}
    >
      {children}
    </DependenciesContainer>
  )
}

export default CanbanContainer
