import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { generateOrderUID } from '../../utils/orderUIDGenerator'

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: 10
  },
  cursor: {
    cursor: 'grab'
  }
}))

const Order = ({ order, handleClick, handleDragStart, readonly }) => {
  const styles = useStyles()

  return (
    <Card
      className={`${styles.margin} ${!readonly && styles.cursor}`}
      draggable={!readonly}
      onDragStart={handleDragStart}
      onClick={handleClick}
    >
      <Box p={1}>
        <span style={{ fontSize: '0.8em', display: 'flex', justifyContent: 'center' }}>
          {generateOrderUID(order.user_id, order.id)}
        </span>
      </Box>
    </Card>
  )
}

export default Order
