import React, {useEffect, useState} from 'react';
import {Container, Grid} from "@material-ui/core";
import Board from "./Board";
import Box from "@material-ui/core/Box";
import {statuses} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import canban from "../../store/canban";

const Main = observer(() => {

    useEffect(() => {
        canban.fetchOrders()
    }, [])

    return (
        <Grid style={{height:"70%"}} container direction="row" justify="space-around">
            {canban.boards.map(board =>
                <Board board={board} key={board.id}/>
            )}
        </Grid>

    );
});

export default Main;
