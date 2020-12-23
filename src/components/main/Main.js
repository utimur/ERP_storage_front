import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { employees, roles } from '../../utils/consts'
import { observer } from 'mobx-react-lite'
import GoodDialog from './GoodDialog'
import FeedContainer from './Feed/components'
import ContentContainer from '../ContentContainer'
import DependenciesContext from '../DependenciesContext'
import CanbanContainer from './Canban/container'

const componentFromRole = role => {
  if (Object.values(employees).includes(role)) {
    return <FeedContainer />
  }
  return <CanbanContainer />
}

const Main = observer(() => {
  const { userStore } = useContext(DependenciesContext)

  return (
    <ContentContainer>
      <Grid style={{ height: '80%' }} container direction='row' justify='space-between'>
        {componentFromRole(userStore.Role)}
      </Grid>
      <GoodDialog />
    </ContentContainer>
  )
})

export default Main
