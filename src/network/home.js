import { request } from "./request";

/**
 * 获取首页所有数据
 * @param {*} config
 */
export function homeAllData() {
  return request({
    url: '/api/index'
  })
}