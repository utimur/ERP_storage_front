import {makeAutoObservable} from "mobx";
import {baseHost} from "../http/axios";
import jwtDecode from 'jwt-decode'

// CТЭЙТ ДЛЯ ЮЗЕР ИНФОРМЕЙШН
class User {
    id = null
    role = null

    get isAuth() {
        return this.id !== null
    }

    constructor() {
        makeAutoObservable(this)
        const token = localStorage.getItem('token')
        if (token !== null) {
            const decoded = jwtDecode(token)
            this.id = decoded.id
            this.username = decoded.username
            this.role = decoded.role
        }
    }

    logout() {
        localStorage.removeItem('token')
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
