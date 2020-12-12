import React from 'react'
import Card from '@material-ui/core/Card'
import { Button, CardContent, Grid, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import user from '../../store/user'
import { useInput } from '../../hooks/useInput'
import useInfo from "../../hooks/useInfo";

const Login = () => {
  const username = useInfo('', { isEmpty: false, minLength: 8 })
  const password = useInfo('', { isEmpty: false, minLength: 8 })

  return (
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
              <Box mt={2}>
                <TextField
                  fullWidth
                  label='Введите имя пользователя...'
                  variant='outlined'
                  value={username.value} onChange={e => username.setValue(e.target.value)}
                  error={!username.isValid && username.isActive && username.value !== ''}
                  helperText={username.isActive && username.error}
                  onFocus={() => username.setIsActive(true)}
                />
              </Box>
              <Box mt={2}>
                <TextField
                  type='password'
                  fullWidth
                  label='Введите пароль...'
                  variant='outlined'
                  value={password.value} onChange={e => password.setValue(e.target.value)}
                  error={!password.isValid && password.value !== ''}
                  helperText={password.isActive && password.error}
                  onFocus={() => password.setIsActive(true)}
                />
              </Box>
            </Box>
            <Grid container justify='flex-end'>
              <Box mt={2}>
                <Button
                  onClick={e => { e.preventDefault(); user.login(username.value, password.value) }}
                  type="submit"
                  variant='outlined'
                  color='primary'
                  disabled={!username.isValid || !password.isValid}
                >
                  Войти
                </Button>
              </Box>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Login
