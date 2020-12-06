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
    orders = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchOrders() {
        authHost.get('/api/orders')
            .then(resp => console.log(resp.data))
    }
}

export default new Canban()
