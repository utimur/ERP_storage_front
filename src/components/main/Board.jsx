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
import '../../App.css'
import {authHost} from "../../http/axios";

// Необходимо сделать 2 исправления - (загрузка заказов: 45, изменение статуса: 34)

const statusOrder = {
    [statuses.CREATED]: 0,
    [statuses.FORMALIZING]: 1,
    [statuses.COLLECTING] : 2,
    [statuses.DELIVERING]: 3,
    [statuses.DONE]: 4,
}

const Board = observer(({ board }) => {
    const orders = board.orders

    const isMoved = (orderStatus, boardStatus) => {
        const difference = statusOrder[orderStatus] - statusOrder[boardStatus]
        return difference === 1 || difference === -1;

    }
    const onDropEvent = (e) => {
        e.preventDefault();
        if (canban.currentOrder.status !== statuses.DONE && isMoved(canban.currentOrder.status, board.status)) {
            authHost.post(`/api/orders/${canban.currentOrder.id}/update_status`, {
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
        <Card
            style={{ height: '100%' }}
            onDragOver={onDragOverEvent}
            onDrop={onDropEvent}
        >
            <CardContent style={{ width: 200, height: '90%' }}>
                <Grid container justify='center'>
                    <Typography variant='h6'>
                        {board.title}
                    </Typography>
                </Grid>
                {orders.map(card =>
                    <Order key={card.id} card={card} />
                )}
            </CardContent>
            {board.status === statuses.CREATED &&
                <Grid container justify="center">
                    <Icon
                        fontSize="large"
                        style={{cursor: "pointer"}}
                        onClick={() => app.showOrderDialog()}>
                        add_circle_outline
                    </Icon>
                </Grid>
            }
        </Card>
    )
})

export default Board
