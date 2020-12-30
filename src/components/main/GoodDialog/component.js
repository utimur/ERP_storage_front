import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography
} from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { GoodDialogContext } from '../../../contexts'
import TextField from '../../TextField'

const GoodForm = observer(() => {
  const { dependencies: { goodDialogStore } } = useContext(GoodDialogContext)

  return (
    <Grid alignItems='center' container spacing={2} style={{ marginTop: 10 }}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Наименование'
          required
          error={goodDialogStore.Errors.name}
          variant='outlined'
          value={goodDialogStore.Name}
          onChange={e => { goodDialogStore.Name = e.target.value }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Код'
          required
          error={goodDialogStore.Errors.code}
          variant='outlined'
          value={goodDialogStore.Code}
          onChange={e => { goodDialogStore.Code = e.target.value }}
        />
      </Grid>
    </Grid>
  )
})

const GoodDialog = () => {
  const { dependencies: { goodDialogStore } } = useContext(GoodDialogContext)

  return (
    <Dialog
      open={goodDialogStore.IsVisible}
      onClose={() => goodDialogStore.toggleVisibility()}
      fullWidth
    >
      <DialogTitle>
        <Grid container alignItems='center' justify='space-between'>
          <Typography variant='h6'>Новая складская единица</Typography>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <GoodForm />
      </DialogContent>
      <DialogActions>
        <Grid container justify='flex-end' style={{ marginRight: 15, marginBottom: 10 }}>
          <Button
            onClick={() => goodDialogStore.create()}
            style={{ marginTop: 10 }}
            disabled={!goodDialogStore.CanCreate}
            color='primary'
            variant='outlined'
          >
            Создать
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default observer(GoodDialog)
