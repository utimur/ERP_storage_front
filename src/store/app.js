import {makeAutoObservable} from "mobx";

// CТЭЙТ ДЛЯ АЛЕРТОВ, МОДАЛОК, ЛОАДЕРОВ
class App {
    createOrderDialogVisible = false
    createGoodDialogVisible = false
    loader = false

    constructor() {
        makeAutoObservable(this)
    }

    showLoader() {
        this.loader = true
    }

    hideLoader() {
        this.loader = false
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
