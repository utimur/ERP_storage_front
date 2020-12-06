import {makeAutoObservable} from "mobx";

// CТЭЙТ ДЛЯ АЛЕРТОВ, МОДАЛОК, ЛОАДЕРОВ
class App {
    createOrderDialogVisible = false
    constructor() {
        makeAutoObservable(this)
    }

    showOrderDialog() {
        this.createOrderDialogVisible = true
    }

    hideOrderDialog() {
        this.createOrderDialogVisible = false
    }
}

export default new App()
