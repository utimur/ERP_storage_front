import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Divider, Grid, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import Box from '@material-ui/core/Box'
import app from '../../stores/app'
import { observer } from 'mobx-react-lite'
import TextField from '@material-ui/core/TextField'
import { useInput } from '../../hooks/useInput'
import goods from '../../stores/good'

const GoodDialog = observer(() => {
  const name = useInput('')
  const code = useInput('')

  const addGood = () => {
    name.onChange({ target: { value: '' } })
    code.onChange({ target: { value: '' } })
    goods.addGood(name.value, code.value)
  }

  return (
    <Dialog fullWidth open={app.createGoodDialogVisible} onClose={() => app.hideGoodDialog()}>
      <DialogTitle>
        <Grid container alignItems='center' justify='space-between'>
          <Typography variant='h6'>Новый товар</Typography>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box mt={2} mb={2}>
          <Grid direction='column' container alignItems='flex-end'>
            <TextField
              {...name}
              fullWidth
              label='Название товара'
              variant='outlined'
              style={{ marginBottom: 15 }}
            />
            <TextField
              {...code}
              fullWidth
              label='Код товара'
              variant='outlined'
              style={{ marginBottom: 15 }}
            />
            <Button
              onClick={() => addGood()}
              variant='outlined'
              color='primary'
            >
              Добавить
            </Button>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  )
})

export default GoodDialog
