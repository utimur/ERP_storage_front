import {makeAutoObservable} from "mobx";

// CТЭЙТ ДЛЯ ЮЗЕР ИНФОРМЕЙШН
class User {
    isAuth = false
    constructor() {
        makeAutoObservable(this)
    }
}

export default new User()
