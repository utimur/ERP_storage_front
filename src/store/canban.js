import {makeAutoObservable} from "mobx";
import {statuses} from "../utils/consts";
import {authHost} from "../http/axios";

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
        console.log(status)
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
}

function compare (a,b) {
    return a.order > b.order? 1: -1
}

export default new Canban()
