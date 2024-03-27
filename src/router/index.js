import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import CV from '@/components/CV.vue'
import UserPage from '@/components/UserPage.vue'
import CVModify from '@/components/CVModify.vue'

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: MainPage
  }, {
    path: '/cv',
    name: 'cv',
    component: CV
  }, {
    path: '/user',
    name: 'user',
    component: UserPage
  }, {
    path: '/cvmodify',
    name: 'cvmodify',
    component: CVModify,
    props: route => ({ jobIds: route.query.jobIds, cv: route.query.cv })
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
