import { request } from "./request";

/**
 * 获取首页所有数据
 * @param {*} config
 */
export function getHomeAllData() {
  return request({
    url: '/api/index'
  })
}

/**
 * 获取首页所有数据
 * @param {*} config
 */
export function getHomeGoods(type = "sales", page = 1) {
  return request({
    url: `/api/index?${type}=1&&page=${page}`
  })
}