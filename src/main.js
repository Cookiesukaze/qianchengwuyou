import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import '@/assets/font/font.css'
import axios from 'axios'

// axios：添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store).use(router).use(Antd).mount('#app')
