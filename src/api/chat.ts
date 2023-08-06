import { request } from '@tarojs/taro'
import { baseUrl } from './config'

/** 获取消息列表 */
export const getChatList = (params) => request({
  url: `${baseUrl}/chat/list`,
  method: 'GET',
  data: params
})
