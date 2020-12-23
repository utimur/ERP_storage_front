import React from 'react'
import Card from '@material-ui/core/Card'
import { CardContent, Icon, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Order from '../Order'
import { observer } from 'mobx-react-lite'
import { statuses, statusToLabel } from '../../../utils/consts'
import styled from 'styled-components'

// Необходимо сделать 2 исправления - (загрузка заказов: 45, изменение статуса: 34)

const StyledCard = styled(Card)`
  height: 100%;
`

const StyledCardContent = styled(CardContent)`
  width: 10em;
  height: 90%;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
`

const Board = observer(({
  status,
  orders,
  handleDrag,
  handleDrop,
  handleOrderClick,
  handleToggleOrderDialog,
  readonly = false
}) => {
  const onDropEvent = e => {
    e.preventDefault()
    handleDrop(status)
  }

  const onDragOverEvent = e => e.preventDefault()

  return (
    <StyledCard
      onDragOver={onDragOverEvent}
      onDrop={onDropEvent}
    >
      <StyledCardContent>
        <Grid container justify='center'>
          <Typography variant='h6'>
            {statusToLabel[status]}
          </Typography>
        </Grid>
        {orders.map(o =>
          <Order
            key={o.id}
            order={o}
            handleClick={() => handleOrderClick(o.id)}
            handleDragStart={() => handleDrag(o.id)}
            readonly={readonly}
          />
        )}
      </StyledCardContent>
      {status === statuses.CREATED && !readonly ? (
        <Grid container justify='center'>
          <StyledIcon
            fontSize='large'
            onClick={handleToggleOrderDialog}
          >
            add_circle_outline
          </StyledIcon>
        </Grid>
      ) : null}
    </StyledCard>
  )
})

export default Board
