import axios from 'axios'

const buildHost = (config, tokenStore = null) => {
  const host = axios.create(config)
  if (tokenStore !== null) {
    host.interceptors.request.use(config => {
      config.headers.Authorization = tokenStore.get()
      return config
    })
  }
  return host
}

export default buildHost
