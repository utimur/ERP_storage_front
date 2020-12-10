import {makeAutoObservable} from "mobx";
import {statuses} from "../utils/consts";
import {authHost} from "../http/axios";
import app from "./app";
import user from "./user";

class Canban {
    boards = [
        {id:1,status: statuses.CREATED, title:'Заказы', orders: []},
        {id:2,status:  statuses.FORMALIZING, title:'Оформление', orders: []},
        {id:3,status:  statuses.COLLECTING, title:'Сборка', orders: []},
        {id:4,status:  statuses.DELIVERING, title:'Доставка', orders: []},
        {id:5,status:  statuses.DELIVERED, title:'Выполнено', orders: []},
    ]
    /*
    orders = [
        {id:1, status: statuses.CREATED, title: 'Машина'},
        {id:2, status: statuses.DELIVERED, title: 'Салат'},
        {id:3, status: statuses.DELIVERING, title: 'Топор'},
        {id:4, status: statuses.DELIVERING, title: 'Очки'},
        {id:5, status: statuses.COLLECTING, title: 'Книга'},
        {id:6, status: statuses.FORMALIZING, title: 'Кружка'},
        {id:7, status: statuses.CREATED, title: 'Руль'},
        ]

     */
    currentOrder = null
    constructor() {
        makeAutoObservable(this)
    }

    fetchOrders(status) {
        authHost.get(`/api/orders?user_id=${user.id}&status=${status}`)
            .then(resp => {
                this.boards.forEach(board => {
                    if (board.status === status) {
                        board.orders = resp.data
                        return
                    }
                })
            })
            .catch(err => {
                alert(`Ошибка получения заказов, ${err.message}`)
            })
    }



    setCurrentOrder(order) {
        this.currentOrder = order
    }

    addOrder() {
        // authHost.post(`/`)
        const order = {
            id: Date.now(), //todo сделать запросы и убрать костыльный айди
            status: statuses.CREATED,
            title: 'ПОКА ХЗ ЧТО ТУТ'
        }
        this.orders.push(order)
        app.hideOrderDialog()
        this.goods = []
    }



    moveOrder(boardStatus) {
        let currentBoard = null
        let boardForDrop = null
        this.boards.forEach(board => {
            if (board.status === this.currentOrder.status) {
                currentBoard = board
            }
            else if (board.status === boardStatus) {
                boardForDrop = board
            }
        })
        let removeIndex = currentBoard.orders.indexOf(this.currentOrder)
        currentBoard.orders.splice(removeIndex, 1)
        boardForDrop.orders.push(this.currentOrder)
        this.currentOrder.status = boardStatus
        this.setCurrentOrder(null)
    }
    /*
    getOrdersByStatus(status) {
        let currentOrderInArray = 0
        return this.orders.filter(order => {
            if (order.status === status) {
                if (!order.hasOwnProperty("order")) {
                    order.order = currentOrderInArray
                    currentOrderInArray++;
                }
                return true
            }
        }).sort(compare)
    }
     */


/*
function compare (a,b) {
    return a.order > b.order? 1: -1
}

 */


export default new Canban()
