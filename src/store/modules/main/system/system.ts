
import { Module } from "vuex/types/index.js";
import type { ISystemState } from './types'
import type { IRootState } from '@/store/types'
import { usersListData } from '@/api/main/system/system'
const systemStore: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    usersListData: [],
    usersCount: 0
  },
  mutations: {
    changeUserListData(state, payLoad) {
      state.usersListData = payLoad
      console.log(state.usersListData)
    },
    changeUsersCount(state, payLoad) {
      state.usersCount = payLoad
    }
  },
  actions: {
    async getPageListAction({ commit }, payLoad) {
      const { data }: any = await usersListData(payLoad.pageUrl, payLoad.queryInfo)
      commit('changeUserListData', data.list)
      commit('changeUsersCount', data.totalCount)
    }
  }
}

export default systemStore