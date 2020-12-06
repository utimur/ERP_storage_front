import React from 'react';
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Good = ({card}) => {
    return (
        <Card style={{marginTop:10}}>
            <Box p={1} width="80%">
                {card.title}
            </Box>
        </Card>
    );
};

export default Good;
