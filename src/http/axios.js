import axios from 'axios'

const serverAddress = process.env.REACT_APP_API_PREFIX || `http://84.201.146.160`

// ОТСЮДА ШЛЕМ ЗАПРОСЫ КОТОРЫЕ НЕ ТРЕБУЮТ АВТОРИЗАЦИИ
const baseHost = axios.create({
  baseURL: serverAddress
})

// C ЭТОГО ХОСТА ШЛЕМ ЗАПРОСЫ КОТОРЫЕ В КОТОРЫЕ ЗАСОВЫВАЕТСЯ ТОКЕН
const authHost = axios.create({
  baseURL: serverAddress
})

const auth_interceptor = (config) => {
  config.headers.Authorization = localStorage.getItem('token')
  return config
}

authHost.interceptors.request.use(auth_interceptor)

export { authHost, baseHost, serverAddress }
