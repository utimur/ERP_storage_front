import React, { useContext, useEffect, useRef } from 'react'
import DependenciesContext from '../../DependenciesContext'
import CanbanStore from './store'
import OrderDialogStore from '../OrderDialog/store'
import OrderDialog from '../OrderDialog/component'
import Canban from './component'
import { observer } from 'mobx-react-lite'
import OrderInfoDialog from '../OrderInfoDialog/component'
import OrderInfoStore from '../OrderInfoDialog/store'

const CanbanContainer = () => {
  const { userStore, orderStore, goodStore, deliveryCompanyStore } = useContext(DependenciesContext)
  const canbanStoreRef = useRef(new CanbanStore(userStore, orderStore))
  // TODO: setup orderInfoStoreRef
  const orderInfoStoreRef = useRef(new OrderInfoStore(orderStore, deliveryCompanyStore))
  const orderDialogStoreRef = useRef(new OrderDialogStore(userStore, orderStore, goodStore, deliveryCompanyStore))

  useEffect(() => { canbanStoreRef.current.init() }, [canbanStoreRef])
  useEffect(() => { orderDialogStoreRef.current.init() }, [orderDialogStoreRef])

  const canbanStore = canbanStoreRef.current
  return canbanStore.IsReady ? (
    <>
      <Canban
        readonly={canbanStore.IsReadonly}
        boards={canbanStore.Boards}
        handleOrderClick={id => orderInfoStoreRef.current.init(id)}
        handleToggleOrderDialog={() => orderDialogStoreRef.current.toggleVisibility()}
        handleDrag={orderId => canbanStore.startDrag(orderId)}
        handleDrop={newStatus => canbanStore.endDrag(newStatus)}
      />
      <OrderInfoDialog orderInfoStore={orderInfoStoreRef.current} />
      <OrderDialog orderDialogStore={orderDialogStoreRef.current} />
    </>
  ) : null
}

export default observer(CanbanContainer)
