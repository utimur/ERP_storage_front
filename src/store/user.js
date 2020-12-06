import {makeAutoObservable} from "mobx";
import {baseHost} from "../http/axios";

// CТЭЙТ ДЛЯ ЮЗЕР ИНФОРМЕЙШН
class User {
    isAuth = true
    user = null

    constructor() {
        makeAutoObservable(this)
    }

    logout() {
        localStorage.removeItem('token')
        this.isAuth = false
        this.user = null
    }

    login(username, password) {
        baseHost.post(`/api/auth`, {
            username, password
        }).then(response => {
            this.auth(response.data.token)
        }).catch(error => {
            alert(error)
        })
    }
    auth (token) {
        localStorage.setItem('token', token)
        this.isAuth = true
    }
    registration(username, password) {
        const ROLE = "admin"
        baseHost.post(`/api/users`, {
            username, password, role: ROLE,
        }).then(response => {
            this.auth(response.data.token)
        }).catch(error => {
            alert(error)
        })
    }
}

export default new User()
