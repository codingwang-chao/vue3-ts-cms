import { createStore } from 'vuex'
import login from './modules/login/login'
import system from './modules/main/system/system'

const store =  createStore({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    system
  }
})

export const setupStore = () => {
  store.dispatch('login/reloadLoginInfo')
}

export default store
