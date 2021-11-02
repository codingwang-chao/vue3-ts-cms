import { Module } from "vuex/types/index.js";
import { ILoginState } from './types'
import { IRootState } from "../../types";
import { loginHttp, loginUserInfo, loginUserMenuById } from '@/api/login'
import localStorageWc from "@/utils/localStorage";
import router from "@/router";
import  mapToRoutes  from '@/utils/mapToRoutes'
import { RouteRecordRaw } from "vue-router";
import mapBtnreCursion from '@/utils/mapBtnpermissions'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      //用户按钮权限数组
      permissionArr: [],
      breadCrumbArr: []
    }
  },
  mutations: {
    tokenChange(state, payload) {
      state.token = payload
    },
    userInfoChange(state, payload) {
      state.userInfo = payload
    }, 
    changeUserMenus(state, payload) {
      state.userMenus = payload

      let routes = mapToRoutes(payload)
      // 添加routes
      routes.forEach((route: RouteRecordRaw) => {
        //router.addRoute()这是一个原生的方法，第一个参数是加到哪个路由下面，第二个参数是加入这个路由下的子路由，就是children路由
        router.addRoute('layout', route)
      })

      //获取用户的按钮权限数组
      const permissionsArr = mapBtnreCursion(payload)
      state.permissionArr = permissionsArr
    }
  },
  actions: {
    //用户点击登录调用
    async accountLoginAction({ commit, dispatch }, payload: any) {
      console.log(payload, 'data')

      // 1.实现登录逻辑
      const loginResult: any = await loginHttp(payload)
      const { token, id} = loginResult.data
      commit('tokenChange', token)
      localStorageWc.set('token', token)

      // 2.获取用户信息
      const userInfoResult = await loginUserInfo(id)
      const userInfo: any = userInfoResult.data
      commit('userInfoChange', userInfo)
      localStorageWc.set('userInfo', userInfo)

      // 3.获取对应角色的菜单
      const userMenuResult = await loginUserMenuById(userInfo.role.id)
      const userMenus = userMenuResult.data
      commit('changeUserMenus', userMenus)
      localStorageWc.set('userMenus', userMenus)

      // 4.获取初始化数据(部门/角色)

      dispatch('getInitialPageListData', null, {root: true} )

      // 5.登录跳转到首页
      router.push('/')
    },

    // 重新加载关于用户的登录信息 主要是防止用户刷新之后vuex的数据清空，不再通过直接赋值login中state通过commit来改变vuex中的state状态
    reloadLoginInfo({ commit, dispatch }) {
      const token = localStorageWc.get('token')
      if(token){
        commit('tokenChange', token)
        dispatch('getInitialPageListData', null, {root: true} )
      }
      const userInfo = localStorageWc.get('userInfo')
      if(userInfo) {
        commit('userInfoChange', userInfo)
      }
      const userMenus = localStorageWc.get('userMenus')
      if(userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  },

  getters: {

  }
}

export default loginModule