import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err)
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    res => res.data,
    err => err.message
  )

  return instance(config)
}
