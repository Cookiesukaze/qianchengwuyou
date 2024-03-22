import axios from './request'
// 请求示例
// get
export const fakeGet = (data) => {
  return axios({
    url: '/getTest',
    method: 'get',
    data,
    config: {
      timeout: 3000
    }
  })
}
// post
export const fakePost = (data) => {
  return axios({
    url: '/postTest',
    method: 'post',
    data,
    config: {
      timeout: 3000
    }
  })
}
