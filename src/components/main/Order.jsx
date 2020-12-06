import React from 'react';
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import canban from "../../store/canban";


const Order = ({card}) => {
    return (
        <Card style={{marginTop:10, cursor: "grab"}} draggable = {true} onDragStart = {e => {canban.setCurrentOrder(card)}}>
            <Box p={1} width="80%">
                {card.title}
            </Box>
        </Card>
    );
};

export default Order;
