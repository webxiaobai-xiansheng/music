// 引用组件
import originJSONP from 'jsonp'

// 封装函数
// url网址
// data是拼接网址后面字符串
export default function jsonp (url, data, option) {
  // https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1542628673826
  // 网址从？后开始时拼接
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param (data) {
  let url = ''
  // for...in 语句用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）
  for (var k in data) {
    // 为什么这里要添加三元表达式？因为要判断data是否空，如果是看对象，则返回空字符串
    let value = data[k] !== undefined ? data[k] : ''
    // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // url.substring(1)去掉第一个字符串，为什么要去掉，因为在前面调用时，也加了&，两个&会报错
  return url ? url.substring(1) : ''
}
