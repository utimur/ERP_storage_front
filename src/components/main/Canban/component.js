import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { CanbanContext } from '../../../contexts'
import Board from '../Board'

const Canban = () => {
  const {
    dependencies: { canbanStore, orderInfoStore, orderDialogStore }
  } = useContext(CanbanContext)

  useEffect(() => {
    canbanStore.init()
  }, [canbanStore])

  return canbanStore.IsReady ? canbanStore.Boards.map(b => (
    <Board
      key={b.status}
      status={b.status}
      orders={b.orders}
      readonly={canbanStore.IsReadonly}
      handleOrderClick={id => orderInfoStore.init(id)}
      handleToggleOrderDialog={() => orderDialogStore.toggleVisibility()}
      handleDrag={orderId => canbanStore.startDrag(orderId)}
      handleDrop={newStatus => canbanStore.endDrag(newStatus)}
    />
  )) : null
}

export default observer(Canban)
