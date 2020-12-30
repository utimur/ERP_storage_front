import React from 'react'
import { CanbanContainer } from '../../../containers'
import OrderDialog from '../OrderDialog/component'
import OrderInfoDialog from '../OrderInfoDialog/component'
import Canban from './component'

export default () => (
  <CanbanContainer>
    <Canban />
    <OrderInfoDialog />
    <OrderDialog />
  </CanbanContainer>
)
