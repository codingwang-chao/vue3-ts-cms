/**
 * layout组件中所有子组件的映射
 * 
 * 动态注册路由!!!
 * 
 * 这是只是写了layout组件下的所有子路由,但并没有注册到router上面去,
 * 现在要做动态注册路由,这是的路由相当于总路由,通过用户登录返回数据中的路由权限做匹配,
 * 取出用户权限下的路由,来进行动态注册
 * 在utils中的mapToRoutes中定义的方法拿到用户可以访问的路由,
 * 再去store中的login中的mutations模块,通过原生方法router.addRoute()来进行路由注册,相当于在router文件下下的index.ts注册路由
 */
import type { RouteRecordRaw } from 'vue-router'


// 下面是路由懒加载,通过es6的箭头函数来进行路由懒加载
const dashboard = () => import('@/views/layout/analysis/dashboard/dashBoard.vue')
const overview = () => import('@/views/layout/analysis/overview/overview.vue')

const category = () => import('@/views/layout/product/category/category.vue')
const goods = () => import('@/views/layout/product/goods/goods.vue')

const chat = () => import('@/views/layout/story/chat/chat.vue')
const list = () => import('@/views/layout/story/list/list.vue')

const department = () => import('@/views/layout/system/department/department.vue')
const menu = () => import('@/views/layout/system/menu/menu.vue')
const role = () => import('@/views/layout/system/role/role.vue')
const user = () => import('@/views/layout/system/user/user.vue')

export const alllayoutChildren: RouteRecordRaw[] = [
  {
    path: '/main/analysis/dashboard',
    component: dashboard
  },
  {
    path: '/main/analysis/overview',
    component: overview
  },
  {
    path: '/main/product/category',
    component: category
  },
  {
    path: '/main/product/goods',
    component: goods
  },
  {
    path: '/main/story/chat',
    component: chat
  },
  {
    path: '/main/story/list',
    component: list
  },
  {
    path: '/main/system/department',
    component: department
  },
  {
    path: '/main/system/menu',
    component: menu
  },
  {
    path: '/main/system/role',
    component: role
  },
  {
    path: '/main/system/user',
    component: user
  }
]
