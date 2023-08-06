import { addInterceptor } from '@tarojs/taro'

/** cookie 拦截器 */
const cookieInterceptor = (chain) => {
  const requestParams = chain.requestParams
  requestParams.header = {
    Cookie: 'SESSION=xxx'
  }

  requestParams.enableCookie = true

  return chain.proceed(requestParams)
}

addInterceptor(cookieInterceptor)
