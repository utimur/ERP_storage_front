import React from 'react'
import Board from '../Board/component'
import { observer } from 'mobx-react-lite'

const Canban = ({
  boards,
  handleOrderClick,
  handleToggleOrderDialog,
  handleDrag,
  handleDrop,
  readonly = false
}) => boards.map(b => (
  <Board
    key={b.status}
    status={b.status}
    orders={b.orders}
    handleOrderClick={handleOrderClick}
    handleToggleOrderDialog={handleToggleOrderDialog}
    handleDrag={handleDrag}
    handleDrop={handleDrop}
    readonly={readonly}
  />
))

export default observer(Canban)
