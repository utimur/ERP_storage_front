import React, {useEffect} from 'react';
import Card from "@material-ui/core/Card";
import {CardContent, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Order from "./Order";
import {authHost} from "../../http/axios";
import canban from "../../store/canban";

const Board = ({board}) => {

    useEffect(() => {

    })

    return (
        <Card>
            <CardContent>
                <Box width={200} height="70%">
                    <Grid container justify="center">
                        <Typography variant="h6">
                            {board.title}
                        </Typography>
                    </Grid>
                    {canban.orders.map(card =>
                        <Order key={card.id} card={card}/>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default Board;
