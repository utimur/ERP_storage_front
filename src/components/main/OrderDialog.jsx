import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { observer } from 'mobx-react-lite'
import app from '../../store/app'
import {Divider, Grid, Icon, Typography} from '@material-ui/core'
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
import canban from "../../store/canban";
import DialogActions from "@material-ui/core/DialogActions";
import goods from "../../store/goods";
import Checkbox from "@material-ui/core/Checkbox";

const OrderDialog = observer(() => {
    return (
        <Dialog
            open={app.createOrderDialogVisible}
            onClose={() => app.hideOrderDialog()}
            fullWidth
        >
            <DialogTitle>
                <Grid container alignItems='center' justify='space-between'>
                    <Typography variant='h6'>Новый заказ</Typography>
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
                                    <TableCell>Код товара</TableCell>
                                    <TableCell>Кол-во</TableCell>
                                    <TableCell align="right">Действия</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {goods.goods.length ? goods.goods.map((good) =>
                                        <TableRow key={good.name}>
                                            <TableCell component='th' scope='row'>
                                                {good.name}
                                            </TableCell>
                                            <TableCell>
                                                {good.code}
                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell align='right'>
                                                <Icon
                                                    style={{cursor: "pointer"}}
                                                    onClick={() => goods.removeGood(good.id)}
                                                >delete</Icon>
                                            </TableCell>
                                        </TableRow>
                                    )
                                    :<TableRow>
                                        <TableCell component='th' scope='row'>
                                            <Typography >
                                                Список товаров пуст
                                            </Typography>
                                        </TableCell>
                                    </TableRow>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </DialogContent>
            <DialogActions>
                <Grid container justify="flex-end" style={{marginRight:15, marginBottom:10}}>
                    <Button
                        onClick={() => canban.addOrder(goods.goods.map(g => ({ id: g.id, quantity: 1 })))}
                        style={{marginTop:10}}
                        color="primary"
                        variant="outlined">
                        Создать заказ
                    </Button>
                </Grid>
            </DialogActions>
        </Dialog>
    )
})

export default OrderDialog
