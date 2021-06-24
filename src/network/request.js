import axios from "axios";

export function request(config) {
  const intance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn',
    timeout: 5000
  })

  // 请求拦截
  intance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })

  // 响应拦截
  intance.interceptors.response.use(res => {
    return res.data
  }, err => {
    return err
  })

  return intance(config)
}