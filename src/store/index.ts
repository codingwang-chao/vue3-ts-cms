import { createStore } from 'vuex'
import login from './modules/login/login'

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
    login
  }
})

export const setupStore = () => {
  store.dispatch('login/reloadLoginInfo')
}

export default store
