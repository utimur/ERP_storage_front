import {makeAutoObservable} from "mobx";

// CТЭЙТ ДЛЯ АЛЕРТОВ, МОДАЛОК, ЛОАДЕРОВ
class App {
    constructor() {
        makeAutoObservable(this)
    }
}

export default new App()
