import React from 'react'
import { generateOrderUID } from '../../../utils/orderUIDGenerator'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import {
  Divider,
  Grid,
  Typography
} from '@material-ui/core'
import DialogContent from '@material-ui/core/DialogContent'
import Box from '@material-ui/core/Box'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import { observer } from 'mobx-react-lite'
import { statusToLabel } from '../../../utils/consts'
import { selectDate } from '../../../utils/dateSelector'

const OrderInfoData = observer(({ orderInfoStore }) => (
  <>
    <Box mb={2}>
      <Box pt={1} pl={2} pb={2}>
        <Grid container>
          <Grid item xs={6}>
            <Typography>
              <strong>Статус</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{statusToLabel[orderInfoStore.Order.status]}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box pl={2} pb={2}>
        <Grid container>
          <Grid item xs={6}>
            <Typography>
              <strong>Служба доставки</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>{orderInfoStore.DeliveryCompany}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box pl={2} pb={2}><Grid container>
        <Grid item xs={6}>
          <Typography>
            <strong>Дата доставки</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>{selectDate(new Date(orderInfoStore.Order.delivery_expected_at))}</Typography>
        </Grid>
                         </Grid>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Код товара</TableCell>
              <TableCell align='right'>Кол-во</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderInfoStore.Order.goods.map(g => (
              <TableRow key={g.name}>
                <TableCell component='th' scope='row'>
                  {g.name}
                </TableCell>
                <TableCell>
                  {g.code}
                </TableCell>
                <TableCell align='right' width={100}>
                  {g.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </>
))

const OrderInfoDialog = observer(({ orderInfoStore }) => (
  <Dialog
    open={orderInfoStore.IsReady}
    onClose={() => orderInfoStore.clear()}
    fullWidth
  >
    {orderInfoStore.IsReady ? (
      <>
        <DialogTitle>
          <Grid container alignItems='center' justify='space-between'>
            <Typography variant='h6'>
              {`Заказ #${generateOrderUID(orderInfoStore.Order.user_id, orderInfoStore.Order.id)}`}
            </Typography>
          </Grid>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <OrderInfoData orderInfoStore={orderInfoStore} />
        </DialogContent>
      </>
    ) : null}
  </Dialog>
))

export default OrderInfoDialog
