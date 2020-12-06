import {baseHost} from "../../http/axios";
import user from "../../store/user";

const registration = (username, password) => {
    const ROLE = "lawyer"
    baseHost.post(`/api/users`, {
        username, password, role: ROLE
    }).then(result => {
        console.log(result)
        localStorage.setItem('token', result.token)
        user.setUsername(username)
    }).catch(error => {
        alert(error)
    })
}

export {registration}
