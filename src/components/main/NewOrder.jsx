import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { observer } from 'mobx-react-lite'
import app from '../../store/app'
import { Divider, Grid, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import Box from '@material-ui/core/Box'

const NewOrder = observer(({ open }) => {
  const [goods, setGoods] = useState([])

  return (
    <Dialog
      open={open}
      onClose={() => app.hideOrderDialog()}
      fullWidth
    >
      <DialogTitle>
        <Grid container alignItems='center' justify='space-between'>
          <Typography variant='h6'>Новый заказ</Typography>
          <Button color='primary' variant='outlined'>Добавить товар</Button>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box mt={2} mb={2}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Название</TableCell>
                  <TableCell align='right'>Код товара</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {goods.length ? goods.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.calories}</TableCell>
                  </TableRow>
                ))
                  : <Typography style={{ margin: 15 }}>
                    Список товаров пуст
                  </Typography>}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

      </DialogContent>
    </Dialog>
  )
})

export default NewOrder
