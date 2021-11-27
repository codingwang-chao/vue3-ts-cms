import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import layout from '../views/layout/layout.vue'
import localStorageWc from '@/utils/localStorage'
import { firstMenu } from '@/utils/mapToRoutes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
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
  //404没有的对呀路由跳转到次页面
  {
    path: '/:pathMatch(.*)*',
    name: 'notFount',
    component: () => import('../views/notFound/NotFound_404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//全局前置守卫
router.beforeEach((to, from, next) => {
  const userInfo = localStorageWc.get('userInfo')
  if(to.path != '/login') {
    if(userInfo) {

      // 如果是第一次登录,会跳到用户第一个权限路由
      if(to.path === '/layout'){
        router.push(firstMenu.url)
      }
      next()
    }else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
