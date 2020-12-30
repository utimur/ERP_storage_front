import React from 'react'
import Box from '@material-ui/core/Box'
import { observer } from 'mobx-react-lite'
import TextField from './TextField'

const AuthFields = ({ formStore }) => (
  <>
    <Box mt={2}>
      <TextField
        fullWidth
        label='Введите имя пользователя...'
        variant='outlined'
        value={formStore.Username}
        onChange={e => { formStore.Username = e.target.value }}
        error={formStore.Errors.username}
      />
    </Box>
    <Box mt={2}>
      <TextField
        type='password'
        fullWidth
        label='Введите пароль...'
        variant='outlined'
        value={formStore.Password}
        onChange={e => { formStore.Password = e.target.value }}
        error={formStore.Errors.password}
      />
    </Box>
  </>
)

export default observer(AuthFields)
