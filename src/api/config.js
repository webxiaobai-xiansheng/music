// 公共信息
export const commonParams = {
  g_tk: 5381,
  format: 'json',
  inCharset: 'utf - 8',
  outCharset: 'utf - 8',
  notice: 0
}

// jsonp库封装超时的等因素，和qq浏览器对应起来
export const options = {
  param: 'jsonpCallback'
}

// 语义化，成功的请求
export const ERR_OK = 0
