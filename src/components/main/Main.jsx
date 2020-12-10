import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import Board from './Board'
import Box from '@material-ui/core/Box'
import { statuses } from '../../utils/consts'
import { observer } from 'mobx-react-lite'
import canban from '../../store/canban'
import Card from '@material-ui/core/Card'
import OrderDialog from './OrderDialog'
import app from '../../store/app'
import GoodDialog from "./GoodDialog";
import goods from "../../store/goods";

const Main = observer(() => {
  useEffect(() => {
      goods.fetchGoods()
    // canban.fetchOrders()
  }, [])

  return (
    <Container style={{ height: '100%' }}>
      <Grid style={{ height: '80%' }} container direction='row' justify='space-between'>
        {canban.boards.map(board =>
          <Board board={board} key={board.id} />
        )}
      </Grid>
      <OrderDialog open={app.createOrderDialogVisible} />
      <GoodDialog/>
    </Container>
  )
})

export default Main
