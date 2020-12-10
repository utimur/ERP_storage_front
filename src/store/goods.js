import {makeAutoObservable} from "mobx";
import {authHost} from "../http/axios";
import app from "./app";

class Goods {
    goods = []

    constructor() {
        makeAutoObservable(this)
    }

    addGood(name, code) {
        authHost.post(`/api/goods`, {name, code, warehouse_id:1})
            .then(resp => this.goods.push(resp.data))
            .catch(e => console.log(e))
            .finally(() => app.hideGoodDialog())

    }

    fetchGoods() {
        app.showLoader()
        authHost.get("/api/goods")
            .then(resp => this.goods = resp.data.data)
            .catch(e => console.log(e))
            .finally(() => app.hideLoader())
    }

    removeGood(id) {
        this.goods = this.goods.filter(good => good.id !== id)
    }
}


export default new Goods()
