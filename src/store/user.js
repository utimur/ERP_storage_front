import {makeAutoObservable} from "mobx";

// CТЭЙТ ДЛЯ ЮЗЕР ИНФОРМЕЙШН
class User {
    isAuth = false
    username = ''
    constructor() {
        makeAutoObservable(this)
    }
    setUsername (username) {
        this.username = username
    }
}

export default new User()
