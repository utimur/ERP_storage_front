import {
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Alert } from '@material-ui/lab'
import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { CanbanContext } from '../../../contexts'
import { selectDate } from '../../../utils/dateSelector'
import TextField from '../../TextField'

/*

const DocumentAttachButton = () => {
  return (
    <Grid item xs={2}>
      <label htmlFor='file-input'>
        <Tooltip title='Прикрепить документ'>
          <Icon style={{ fontSize: 50, cursor: 'pointer' }}>note_add</Icon>
        </Tooltip>
      </label>
      <input style={{ display: 'none' }} id='file-input' type='file' />
    </Grid>
  )
} */

const DeliveryCompanyDropdownList = ({ orderDialogStore }) => (
  <FormControl fullWidth variant='outlined'>
    <InputLabel id='demo-simple-select-outlined-label'>Служба доставки</InputLabel>
    <Select
      labelId='demo-simple-select-outlined-label'
      id='demo-simple-select-outlined'
      disabled={orderDialogStore.IsReadonly}
      value={orderDialogStore.DeliveryCompanyId}
      onChange={e => { orderDialogStore.DeliveryCompanyId = e.target.value }}
      label='Служба доставки'
    >
      {orderDialogStore.DeliveryCompanies.map(c => (
        <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
      ))}
    </Select>
  </FormControl>
)

const GoodsListForm = observer(({ orderDialogStore }) => (
  <Box mt={2} mb={2}>
    <TableContainer>
      {orderDialogStore.Errors.goods !== undefined ? (
        <Alert severity='info'>{orderDialogStore.Errors.goods}</Alert>
      ) : null}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Код товара</TableCell>
            <TableCell align='right'>Кол-во</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderDialogStore.IsReady !== null ? orderDialogStore.Goods.map(g => (
            <TableRow key={g.name}>
              <TableCell component='th' scope='row'>
                {g.name}
              </TableCell>
              <TableCell>
                {g.code}
              </TableCell>
              <TableCell align='right' width={100}>
                <TextField
                  disabled={orderDialogStore.IsReadonly}
                  type='number'
                  value={g.quantity}
                  variant='outlined'
                  size='small'
                  onChange={e => orderDialogStore.setGoodQuantity(g.id, e.target.value)}
                />
              </TableCell>
            </TableRow>
          )) : null}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
))

const OrderForm = observer(({ orderDialogStore }) => (
  <Grid alignItems='center' container spacing={2} style={{ marginTop: 10 }}>
    <Grid item xs={12}>
      <TextField
        disabled={orderDialogStore.IsReadonly}
        fullWidth
        label='Дата доставки'
        type='date'
        required
        error={orderDialogStore.Errors.deliveryExpectedAt}
        variant='outlined'
        value={selectDate(orderDialogStore.DeliveryExpectedAt)}
        onChange={e => { orderDialogStore.DeliveryExpectedAt = e.target.value }}
      />
    </Grid>
    <Grid item xs={12}>
      <DeliveryCompanyDropdownList orderDialogStore={orderDialogStore} />
    </Grid>
    <Grid item xs={12}>
      <GoodsListForm orderDialogStore={orderDialogStore} />
    </Grid>
  </Grid>
))

const OrderDialog = () => {
  const {
    dependencies: { orderDialogStore }
  } = useContext(CanbanContext)

  useEffect(() => {
    orderDialogStore.init()
  }, [orderDialogStore])

  return (
    <Dialog
      open={orderDialogStore.IsVisible}
      onClose={() => orderDialogStore.toggleVisibility()}
      fullWidth
    >
      <DialogTitle>
        <Grid container alignItems='center' justify='space-between'>
          <Typography variant='h6'>Новый заказ</Typography>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <OrderForm orderDialogStore={orderDialogStore} />
      </DialogContent>
      <DialogActions>
        <Grid container justify='flex-end' style={{ marginRight: 15, marginBottom: 10 }}>
          <Button
            onClick={() => orderDialogStore.create()}
            style={{ marginTop: 10 }}
            disabled={!orderDialogStore.CanCreate}
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

export default observer(OrderDialog)
