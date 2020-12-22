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

    showLoader() {
        this.loader = true
    }

    hideLoader() {
        this.loader = false
    }

    showOrderDialog(readonly = false) {
        this.readonly = readonly
        this.createOrderDialogVisible = true
    }

    hideOrderDialog() {
        this.createOrderDialogVisible = false
    }

    showGoodDialog(readonly = false) {
        this.readonly = readonly
        this.createGoodDialogVisible = true
    }

    hideGoodDialog() {
        this.createGoodDialogVisible = false
    }
}

export default new App()
