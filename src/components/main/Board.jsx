import React, { useEffect } from 'react'
import Card from '@material-ui/core/Card'
import { Button, CardActionArea, CardContent, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Order from './Order'
import canban from '../../store/canban'
import { observer } from 'mobx-react-lite'
import app from '../../store/app'
import { statuses } from '../../utils/consts'
import {authHost} from "../../http/axios";

const statusOrder = {
  [statuses.CREATED]: 0,
  [statuses.FORMALIZING]: 1,
  [statuses.COLLECTING] : 2,
  [statuses.DELIVERING]: 3,
  [statuses.DELIVERED]: 4,
}

const Board = observer(({ board }) => {
  const orders = canban.getOrdersByStatus(board.status)

  const isMoved = (orderStatus, boardStatus) => {
    const difference = statusOrder[orderStatus] - statusOrder[boardStatus]
    return difference === 1 || difference === -1;

  }
  const onDropEvent = (e) => {
    e.preventDefault();
    if (canban.currentOrder.status !== statuses.DELIVERED && isMoved(canban.currentOrder.status, board.status)) {
      authHost.post(`/api/orders/${canban.currentOrder.id}/update_status`, {
        status: board.status,
      }).then(() => {
        canban.currentOrder.status = board.status;
        canban.currentOrder.order = orders.length;
        canban.setCurrentOrder(null)
      }).catch(error => {
        alert(`Ошибка запроса. ${error.message}`)
      })
    }
  }

  const onDragOverEvent = (e) => {
    if (isMoved(canban.currentOrder.status, board.status))
      e.preventDefault()
  }

  useEffect(() => {

  })
  return (
    <Card
      style={{ height: '100%' }} onDragOver={onDragOverEvent}
      onDrop={onDropEvent}
    >
      <CardContent style={{ width: 200, height: '90%' }}>
        <Grid container justify='center'>
          <Typography variant='h6'>
            {board.title}
          </Typography>
        </Grid>
        {canban.getOrdersByStatus(board.status).map(card =>
          <Order key={card.id} card={card} />
        )}
      </CardContent>
      {board.status === statuses.CREATED &&
        <Button onClick={() => app.showOrderDialog()}>Новый</Button>}
    </Card>
  )
})

export default Board
