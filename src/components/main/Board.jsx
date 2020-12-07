import React, {useEffect} from 'react';
import Card from "@material-ui/core/Card";
import {Button, CardActionArea, CardContent, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Order from "./Order";
import canban from "../../store/canban";
import {observer} from "mobx-react-lite";
import app from "../../store/app";
import {statuses} from "../../utils/consts";

const Board = observer(({board}) => {
    const orders = canban.getOrdersByStatus(board.status)

    useEffect(() => {

    })
    return (
            <Card style={{height: "100%"}} onDragOver={e => {e.preventDefault()}}
                  onDrop={(e) => {e.preventDefault();canban.currentOrder.status = board.status; canban.currentOrder.order = orders.length;canban.setCurrentOrder(null)}}>
                <CardContent style={{width:200,height: "90%"}}>
                    <Grid container justify="center">
                        <Typography variant="h6">
                            {board.title}
                        </Typography>
                    </Grid>
                    {canban.getOrdersByStatus(board.status).map(card =>
                        <Order key={card.id} card={card}/>
                    )}
                </CardContent>
                {board.status === statuses.CREATED &&
                <Button onClick={() => app.showOrderDialog()}>Новый</Button>
                }
            </Card>
    )
})

export default Board


