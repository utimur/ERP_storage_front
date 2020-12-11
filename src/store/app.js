import {makeAutoObservable} from "mobx";

// CТЭЙТ ДЛЯ АЛЕРТОВ, МОДАЛОК, ЛОАДЕРОВ
class App {
    createOrderDialogVisible = false
    createGoodDialogVisible = false
    loader = false
    readonly = false

    constructor() {
        makeAutoObservable(this)
    }

    setReadonly(bool) {
        this.readonly = bool
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
