import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { employees } from '../../utils/consts'
import { observer } from 'mobx-react-lite'
import GoodDialog from './GoodDialog/component'
import Feed from './Feed'
import ContentContainer from '../ContentContainer'
import { GlobalDependenciesContext } from '../../contexts'
import Canban from './Canban'

const componentFromRole = role => (
  Object.values(employees).includes(role) ? <Feed /> : <Canban />
)

const Main = observer(() => {
  const { dependencies: { userStore } } = useContext(GlobalDependenciesContext)

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
