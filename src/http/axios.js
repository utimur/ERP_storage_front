import axios from 'axios'

const serverAddress = `http://178.154.233.191`

// ОТСЮДА ШЛЕМ ЗАПРОСЫ КОТОРЫЕ НЕ ТРЕБУЮТ АВТОРИЗАЦИИ
const baseHost = axios.create({
    baseURL: serverAddress,
})

// C ЭТОГО ХОСТА ШЛЕМ ЗАПРОСЫ КОТОРЫЕ В КОТОРЫЕ ЗАСОВЫВАЕТСЯ ТОКЕН
const authHost = axios.create({
    baseURL: serverAddress
})

let auth_interceptor = (config) => {
    config.headers.Authorization = localStorage.getItem('token')
    return config;
};

authHost.interceptors.request.use(auth_interceptor);

export {authHost, baseHost, serverAddress}
