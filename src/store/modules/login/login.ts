import { Module } from "vuex/types/index.js";
import { ILoginState } from './types'
import { IRootState } from "../../types";
import { loginHttp, loginUserInfo, loginUserMenuById } from '@/api/login'
import localStorageWc from "@/utils/localStorage";
import router from "@/router";
import  mapToRoutes  from '@/utils/mapToRoutes'
import { RouteRecordRaw } from "vue-router";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: [],
      //用户权限数组
      permissionArr: []
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
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
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

      // 4.登录跳转到首页
      router.push('/')
    },

    // 重新加载关于用户的登录信息 主要是防止用户刷新之后vuex的数据清空，不再通过直接赋值login中state通过commit来改变vuex中的state状态
    reloadLoginInfo({ commit, dispatch }) {
      const token = localStorageWc.get('token')
      if(token){
        commit('tokenChange', token)
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