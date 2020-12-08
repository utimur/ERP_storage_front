import React from 'react'
import Card from '@material-ui/core/Card'
import {CardContent, makeStyles} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import canban from '../../store/canban'
import {statuses} from "../../utils/consts";

const useStyles = makeStyles((theme) => ({
    margin: {
        marginTop: 10,
    },
    cursor: {
        cursor: 'grab',
    }
}))

const Order = ({ card }) => {
    const isDelivered = card.status === statuses.DELIVERED
    const styles = useStyles()
  return (
    <Card className={`${styles.margin} ${!isDelivered && styles.cursor}`} draggable={!isDelivered} onDragStart={e => { canban.setCurrentOrder(card) }}>
      <Box p={1} width='80%'>
        {card.title}
      </Box>
    </Card>
  )
}

export default Order
