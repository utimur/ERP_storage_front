import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle, Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Typography
} from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { CanbanContext } from '../../../contexts'
import { statusToLabel } from '../../../utils/consts'
import { selectDate } from '../../../utils/dateSelector'
import { generateOrderUID } from '../../../utils/orderUIDGenerator'

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

const OrderInfoDialog = observer(() => {
  const {
    dependencies: { orderInfoStore }
  } = useContext(CanbanContext)

  return (
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
  )
})

export default OrderInfoDialog
