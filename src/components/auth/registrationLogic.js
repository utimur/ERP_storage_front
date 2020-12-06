import {baseHost} from "../../http/axios";
import user from "../../store/user";

const registration = (username, password) => {
    const ROLE = "lawyer"
    baseHost.post(`/api/users`, {
        username, password, role: ROLE,
    }).then(result => {
        console.log(result.data.token)
        localStorage.setItem('token', result.data.token)
        user.setUsername(username)
    }).catch(error => {
        alert(error)
    })
}

export {registration}
