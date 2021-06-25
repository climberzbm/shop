import axios from "axios";

// import { baseURL, timeout } from "../config/config";

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

// export default class Request {
//   instance = null
//   constructor() {
//     this.instance = axios.create({
//       baseURL,
//       timeout
//     })

//     // 请求拦截
//     this.instance.interceptors.request.use(config => {
//       return config
//     }, err => {
//       return err
//     })

//     // 响应拦截
//     this.instance.interceptors.response.use(res => {
//       return res.data
//     }, err => {
//       return err
//     })
//   }

//   static get({ url = '', params = {} }) {
//     return this.instance.get(url, params)
//   }

//   static get({ url = '', data= {}, params = {} }) {
//     return this.instance.get(url, params)
//   }
// }