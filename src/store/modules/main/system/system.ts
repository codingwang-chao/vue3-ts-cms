
import { Module } from "vuex/types/index.js";
import type { ISystemState } from './types'
import type { IRootState } from '@/store/types'
const systemStore: Module<ISystemState, IRootState> = {
  namespaced: true,
  state: {
    
  },
  mutations: {

  },
  actions: {
    getPageListAction({ commit }, payLoad) {

    }
  }
}

export default systemStore