import React from 'react'
import { Button, CardContent, CardHeader, Container, Grid, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import useInfo from '../../hooks/useInfo'
import user from '../../store/user'

const Registration = () => {
  const username = useInfo('', { isEmpty: false, minLength: 8 })
  const password = useInfo('', { isEmpty: false, minLength: 8 })
  return (
    <Grid style={{ height: '100%' }} container alignItems='center' justify='center'>
      <Card>
        <CardContent>
          <Box width={400}>
            <Grid container justify='center'>
              <Typography variant='h5'>Регистрация</Typography>
            </Grid>
            <Box mt={2}>
              <TextField
                value={username.value} onChange={e => username.setValue(e.target.value)}
                fullWidth label='Введите имя пользователя...' variant='outlined' error={!username.isValid && username.value !== ''} helperText={username.error}
              />
            </Box>
            <Box mt={2}>
              <TextField
                value={password.value} onChange={e => password.setValue(e.target.value)} type='password'
                fullWidth label='Введите пароль...' variant='outlined' error={!password.isValid && password.value !== ''} helperText={password.error}
              />
            </Box>
          </Box>
          <Grid container justify='flex-end'>
            <Box mt={2}>
              <Button
                variant='outlined' color='primary' disabled={!username.isValid || !password.isValid}
                onClick={() => user.registration(username.value, password.value)}
              >Регистрация
              </Button>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Registration
