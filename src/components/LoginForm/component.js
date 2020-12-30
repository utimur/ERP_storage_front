import { Button, CardContent, Grid, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { LoginFormContext, GlobalDependenciesContext } from '../../contexts'
import AuthFields from '../AuthFields'
import ContentContainer from '../ContentContainer'

const LoginForm = () => {
  const { dependencies: { userStore } } = useContext(GlobalDependenciesContext)
  const { dependencies: { formStore } } = useContext(LoginFormContext)

  const handleClick = e => {
    e.preventDefault()
    userStore.login(formStore.Username, formStore.Password)
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
                    Авторизация
                  </Typography>
                </Grid>
                <AuthFields formStore={formStore} />
              </Box>
              <Grid container justify='flex-end'>
                <Box mt={2}>
                  <Button
                    onClick={handleClick}
                    type='submit'
                    variant='outlined'
                    color='primary'
                    disabled={!formStore.CanLogin}
                  >
                    Войти
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

export default observer(LoginForm)
