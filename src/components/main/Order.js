import { Box, Card } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { generateOrderUID } from '../../utils/orderUIDGenerator'

const Order = ({ className, order, handleClick, handleDragStart, readonly }) => (
  <Card
    className={className}
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

export default styled(Order)`
  margin-top: 0.8em;
`
