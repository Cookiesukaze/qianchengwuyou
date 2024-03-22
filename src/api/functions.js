import axios from './request'
// 请求示例
// get模板
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
// post模板
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
// 获取筛选后的卡片信息
export const postFilteredCards = (data) => {
  return axios({
    url: '/postFilteredCards',
    method: 'post',
    data,
    config: {
      timeout: 3000
    }
  })
}
// 获取刷新后的卡片信息
export const postRefreshedCards = () => {
  return axios({
    url: '/postRefreshedCards',
    method: 'post',
    config: {
      timeout: 3000
    }
  })
}
