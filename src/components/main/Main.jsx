import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import Board from './Board'
import Box from '@material-ui/core/Box'
import { statuses } from '../../utils/consts'
import { observer } from 'mobx-react-lite'
import canban from '../../store/canban'
import Card from '@material-ui/core/Card'
import NewOrder from './NewOrder'
import app from '../../store/app'
import NewGood from "./NewGood";

const Main = observer(() => {
  useEffect(() => {
    // canban.fetchOrders()
  }, [])

  return (
    <Container style={{ height: '100%' }}>
      <Grid style={{ height: '80%' }} container direction='row' justify='space-around'>
        {canban.boards.map(board =>
          <Board board={board} key={board.id} />
        )}
      </Grid>
      <NewOrder open={app.createOrderDialogVisible} />
      <NewGood/>
    </Container>
  )
})

export default Main
