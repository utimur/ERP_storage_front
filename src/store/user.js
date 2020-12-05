import {makeAutoObservable} from "mobx";

// CТЭЙТ ДЛЯ ЮЗЕР ИНФОРМЕЙШН
class User {
    isAuth = true
    constructor() {
        makeAutoObservable(this)
    }
}

export default new User()
