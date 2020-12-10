import {makeAutoObservable} from "mobx";
import {statuses} from "../utils/consts";
import {authHost} from "../http/axios";
import app from "./app";

class Canban {
    boards = [
        {id:1,status: statuses.CREATED, title:'Заказы', },
        {id:2,status:  statuses.FORMALIZING, title:'Оформление', },
        {id:3,status:  statuses.COLLECTING, title:'Сборка', },
        {id:4,status:  statuses.DELIVERING, title:'Доставка', },
        {id:5,status:  statuses.DELIVERED, title:'Выполнено', },
    ]
    orders = [
        {id:1, status: statuses.CREATED, title: 'Машина'},
        {id:2, status: statuses.DELIVERED, title: 'Салат'},
        {id:3, status: statuses.DELIVERING, title: 'Топор'},
        {id:4, status: statuses.DELIVERING, title: 'Очки'},
        {id:5, status: statuses.COLLECTING, title: 'Книга'},
        {id:6, status: statuses.FORMALIZING, title: 'Кружка'},
        {id:7, status: statuses.CREATED, title: 'Руль'},
        ]
    currentOrder = null
    goods = []
    constructor() {
        makeAutoObservable(this)
    }

    fetchOrders() {
        authHost.get('/api/orders')
            .then(resp => {
                this.orders = resp.data
            })
    }

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

    addGood(name, code) {
        // authHost.post(`/`)
        const good = {
            id: Date.now(),
            name,
            code
        }
        this.goods.push(good)
        app.hideGoodDialog()
    }

    removeGood(id) {
        this.goods = this.goods.filter(good => good.id !== id)
    }
}

function compare (a,b) {
    return a.order > b.order? 1: -1
}

export default new Canban()
