import React, {useEffect, useRef, useState} from 'react'
import Card from '@material-ui/core/Card'
import {Button, CardActionArea, CardContent, Icon, IconButton, Typography} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Order from './Order'
import canban from '../../store/canban'
import { observer } from 'mobx-react-lite'
import app from '../../store/app'
import { statuses } from '../../utils/consts'
import {authHost} from "../../http/axios";
import styled from "styled-components";

// Необходимо сделать 2 исправления - (загрузка заказов: 45, изменение статуса: 34)

const statusOrder = {
    [statuses.CREATED]: 0,
    [statuses.FORMALIZING]: 1,
    [statuses.COLLECTING] : 2,
    [statuses.DELIVERING]: 3,
    [statuses.DONE]: 4,
}

const isMoved = (orderStatus, boardStatus) => Math.abs(statusOrder[orderStatus] - statusOrder[boardStatus]) === 1

const StyledCard = styled(Card)`
  height: 100%;
`

const StyledCardContent = styled(CardContent)`
  width: 10em;
  height: 90%;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const Board = observer(({ board, readonly = false }) => {
    const onDropEvent = (e) => {
        e.preventDefault();
        const order = canban.currentOrder
        const isCardMovable = order.status !== statuses.DONE && isMoved(order.status, board.status)
        if (isCardMovable) {
            authHost.post(`/api/orders/${order.id}/update_status`, {
                status: board.status
            }).then(() => canban.moveOrder(board.status))
        }
    }

    const onDragOverEvent = (e) => {
        if (isMoved(canban.currentOrder.status, board.status))
            e.preventDefault()
    }

    useEffect(() => {
        canban.fetchOrders(board.status)
    }, [])
    return (
        <StyledCard
            draggable={!readonly}
            onDragOver={onDragOverEvent}
            onDrop={onDropEvent}
        >
            <StyledCardContent>
                <Grid container justify='center'>
                    <Typography variant='h6'>
                        {board.title}
                    </Typography>
                </Grid>
                {board.orders.map(card =>
                    <Order key={card.id} card={card} />
                )}
            </StyledCardContent>
            {board.status === statuses.CREATED &&
                <Grid container justify="center">
                    <StyledIcon
                        fontSize="large"
                        onClick={() => app.showOrderDialog()}>
                        add_circle_outline
                    </StyledIcon>
                </Grid>
            }
        </StyledCard>
    )
})

export default Board
