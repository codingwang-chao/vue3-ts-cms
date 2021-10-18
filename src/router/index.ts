import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import layout from '../views/layout/layout.vue'
import localStorageWc from '@/utils/localStorage'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
    meta: {
      title: '登录'
    },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      console.log('这是单个路由钩子！')
      next()
    }
  },
  // {
  //   path: '*',
  //   component: () => import('../views/error/error_404.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//全局前置守卫
router.beforeEach((to, from, next) => {
  console.log(to, 'beforeEach')
  const userInfo = localStorageWc.get('userInfo')
  if(to.path != '/login') {
    if(userInfo) {
      next()
    }else {
      next('/login')
    }
  }else {
    next()
  }
})

export default router
