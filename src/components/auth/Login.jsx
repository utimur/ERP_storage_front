import React from 'react'
import Card from '@material-ui/core/Card'
import { Button, CardContent, Grid, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import user from '../../store/user'
import { useInput } from '../../hooks/useInput'

const Login = () => {
  const username = useInput('')
  const password = useInput('')

  return (
    <Grid style={{ height: '100%' }} container alignItems='center' justify='center'>
      <Card>
        <CardContent>
          <Box width={400}>
            <Grid
              container
              justify='center'
            >
              <Typography variant='h5'>
                Авторизация
              </Typography>
            </Grid>
            <Box mt={2}>
              <TextField
                {...username}
                fullWidth
                label='Введите имя пользователя...'
                variant='outlined'
              />
            </Box>
            <Box mt={2}>
              <TextField
                type='password'
                {...password}
                fullWidth
                label='Введите пароль...'
                variant='outlined'
              />
            </Box>
          </Box>
          <Grid container justify='flex-end'>
            <Box mt={2}>
              <Button
                onClick={() => user.login(username.value, password.value)}
                variant='outlined'
                color='primary'
              >
                Войти
              </Button>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Login
