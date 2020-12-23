import React from 'react'
import styled from 'styled-components'

const BaseCard = ({ className, order }) => {
  return (
    <div className={className}>
      {/* <OrderForm initialOrder={order} readonly /> */}
    </div>
  )
}

export default styled(BaseCard)`
    background-color: #ffffff;
    border-radius: 0.5em;
`
