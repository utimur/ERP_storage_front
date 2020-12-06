import React, {useEffect} from 'react';
import Card from "@material-ui/core/Card";
import {Button, CardActionArea, CardContent, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Order from "./Order";
import {authHost} from "../../http/axios";
import canban from "../../store/canban";
import {statuses} from "../../utils/consts";
import app from "../../store/app";
import {observer} from "mobx-react-lite";

const Board = observer(({board}) => {

    useEffect(() => {

    })

    return (
        <Card style={{height: "100%"}}>
            <CardContent style={{width:200,height: "90%"}}>
                <Grid container justify="center">
                    <Typography variant="h6">
                        {board.title}
                    </Typography>
                </Grid>
                {canban.orders.map(card =>
                    <Order key={card.id} card={card}/>
                )}
            </CardContent>
            {board.status === statuses.CREATED &&
            <Button onClick={() => app.showOrderDialog()}>Новый</Button>
            }
        </Card>
    );
});

export default Board;
