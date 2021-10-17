import { createStore } from 'vuex'
import login from './modules/login/login'

export default createStore({
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
