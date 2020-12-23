import React, { useContext } from 'react'
import { Button, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import { observer } from 'mobx-react-lite'
import AuthFields from '../AuthFields'
import DependenciesContext from '../DependenciesContext'
import ContentContainer from '../ContentContainer'
import roleList from './roleList'

const RegistrationForm = ({ formStore }) => {
  const { userStore } = useContext(DependenciesContext)

  const handleClick = e => {
    e.preventDefault()
    userStore.registration(
      formStore.Username,
      formStore.Password,
      formStore.Role
    )
  }

  return (
    <ContentContainer>
      <Grid style={{ height: '100%' }} container alignItems='center' justify='center'>
        <Card>
          <CardContent>
            <form>
              <Box width={400}>
                <Grid
                  container
                  justify='center'
                >
                  <Typography variant='h5'>
                    Регистрация
                  </Typography>
                </Grid>
                <AuthFields formStore={formStore} />
                <Box mt={2}>
                  <FormControl variant='outlined'>
                    <InputLabel id='demo-simple-select-outlined-label'>Роль</InputLabel>
                    <Select
                      labelId='demo-simple-select-outlined-label'
                      id='demo-simple-select-outlined'
                      value={formStore.Role}
                      onChange={e => formStore.Role = e.target.value}
                      label='Роль'
                    >
                      {roleList.map(e => <MenuItem key={e.value} value={e.value}>{e.label}</MenuItem>)}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              <Grid container justify='flex-end'>
                <Box mt={2}>
                  <Button
                    onClick={handleClick}
                    type='submit'
                    variant='outlined'
                    color='primary'
                    disabled={!formStore.CanRegister}
                  >
                    Регистрация
                  </Button>
                </Box>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </ContentContainer>
  )
}

export default observer(RegistrationForm)
