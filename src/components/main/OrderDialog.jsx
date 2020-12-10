import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { observer } from 'mobx-react-lite'
import app from '../../store/app'
import {Divider, Grid, Icon, Typography} from '@material-ui/core'
import { TextField } from '@material-ui/core';
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

const OrderDialog = observer(() => {
    const [order, setOrder] = useState({})
    const [quant, setQuant] = useState({})

    useEffect(() => {
        const newQuant = {}
        for (const { code } of goods.goods) {
            newQuant[code] = code in quant ? quant[code] : 0
        }
        setQuant(newQuant)
    }, [goods.goods])

    const updateOrder = (k, v) => setOrder({...order, [k]: v})
    const updateQuant = (k, v) => setQuant({...quant, [k]: v})
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

                <TextField
                    label='Дата доставки'
                    type="date"
                    value={(order.delivery_expected_at ? new Date(order.delivery_expected_at) : new Date()).toISOString().substr(0,10)}
                    onChange={e => updateOrder('delivery_expected_at', new Date(e.target.value) / 1)} />
                <TextField
                    label='Служба доставки'
                    type="number"
                    value={order.delivery_company_id ? order.delivery_company_id : ''}
                    onChange={e => updateOrder('delivery_company_id', isNaN(parseInt(e.target.value)) ? null : parseInt(e.target.value))}/>
                {
                
                //goods
                }
                <Box mt={2} mb={2}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Название</TableCell>
                                    <TableCell>Код товара</TableCell>
                                    <TableCell>Кол-во</TableCell>
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
                                            <TextField
                                                type="number"
                                                value={quant[good.code]}
                                                onChange={
                                                    e => updateQuant(
                                                        good.code,
                                                        isNaN(parseInt(e.target.value)) ? null : parseInt(e.target.value)
                                                    )
                                                }/>
                                            </TableCell>
                                            {/*
                                            <TableCell>

                                            </TableCell>
                                            <TableCell align='right'>
                                                <Icon
                                                    style={{cursor: "pointer"}}
                                                    onClick={() => goods.removeGood(good.id)}
                                                >delete</Icon>
                                            </TableCell>*/}
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
                        onClick={() => canban.addOrder({...order, goods: goods.goods
                            .filter(g => quant[g.code] !== 0)
                            .map(g => ({ id: g.id, quantity: quant[g.code] }))})}
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
