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
import BaseCard from "./Employee/Cards/BaseCard";
import Feed from "./Employee/Feed";
import user from "../../store/user";

const Main = observer(() => {
  useEffect(() => {
      goods.fetchGoods()
    // canban.fetchOrders()
  }, [])

    const componentFromRole = () => {
        const feedUsers = [
            'warehouse',
            'delivery',
            'lawyer',
        ]
        if (feedUsers.includes(user.role)) {
            return <Feed employee={user.role} />
        } else if (user.role === 'admin') {
            return (
                canban.boards.map(board =>
                    <Board board={board} key={board.id} />
                )
            )
        } else if (user.role === 'client') {
            return (
                canban.boards.map(board =>
                    <Board readonly={true} board={board} key={board.id} />
                )
            )
        }
    }

  return (
    <Container style={{ height: '100%' }}>
      <Grid style={{ height: '80%' }} container direction='row' justify='space-between'>
          {componentFromRole()}
      </Grid>
      <OrderDialog initialOrder={canban.initialOrder} readonly={app.readonly} />
      <GoodDialog/>
    </Container>
  )
})

export default Main
