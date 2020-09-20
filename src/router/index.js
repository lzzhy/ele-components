import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/BackTopOne',
    name: 'BackTopOne',
    component: () => import('../views/BackTopOne')  // 异步加载路由的方式
  },
  {
    path: '/BackTopTwo',
    name: 'BackTopTwo',
    component: () => import('../views/BackTopTwo')  // 异步加载路由的方式
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login')  // 异步加载路由的方式
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
