import {makeAutoObservable} from "mobx";

// CТЭЙТ ДЛЯ АЛЕРТОВ, МОДАЛОК, ЛОАДЕРОВ
class App {
    createOrderDialogVisible = false
    createGoodDialogVisible = false

    constructor() {
        makeAutoObservable(this)
    }

    showOrderDialog() {
        this.createOrderDialogVisible = true
    }

    hideOrderDialog() {
        this.createOrderDialogVisible = false
    }

    showGoodDialog() {
        this.createGoodDialogVisible = true
    }

    hideGoodDialog() {
        this.createGoodDialogVisible = false
    }
}

export default new App()
