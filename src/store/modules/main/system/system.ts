
import { Module } from "vuex/types/index.js";
import type { ISystemState } from './types'
import type { IRootState } from '@/store/types'
import { getListData } from '@/api/main/system/system'
const systemStore: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    usersListData: [],
    usersCount: 0,
    roleListData: [],
    roleCount: 0,
    goodsListData: [],
    goodsCount: 0,
    menuListData: [],
    menuCount: 0,
  },
  mutations: {
    changeUsersListData(state, payLoad) {
      state.usersListData = payLoad
      console.log(state.usersListData)
    },
    changeUsersCount(state, payLoad) {
      state.usersCount = payLoad
    },
    changeRoleListData(state, payLoad) {
      state.roleListData = payLoad
    },
    changeRoleCount(state, payLoad) {
      state.roleCount = payLoad
    },
    changeGoodsListData(state, payload) {
      state.goodsListData = payload
    },
    changeGoodsCount(state, payload) {
      state.goodsCount = payload
    },
    changeMenuListData(state, payload) {
      state.menuListData = payload
    },
    changeMenuCount(state, payload) {
      state.menuCount = payload
    },
  },
  actions: {
    //获取不同页面数据的actions方法
    async getPageListAction({ commit }, payLoad) {
      const { data }: any = await getListData(`/${payLoad.pageName}/list`, payLoad.queryInfo)
      const changeName = payLoad.pageName.slice(0,1).toUpperCase() + payLoad.pageName.slice(1)
      commit(`change${changeName}ListData`, data.list)
      commit(`change${changeName}Count`, data.totalCount)
    }
  }
}

export default systemStore