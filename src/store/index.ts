import { createStore } from 'vuex'
import login from './modules/login/login'
import system from './modules/main/system/system'
import { getListData } from '@/api/main/system/system'

const store =  createStore({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, payload) {
      state.entireDepartment = payload
    },
    changeEntireRole(state, payload) {
      state.entireRole = payload
    },
  },
  actions: {
    async getInitialPageListData({ commit }) {
      const departmentDataList: any = await getListData( '/department/list', {
        offset: 0,
        size: 1000
      })
      const departmentList = departmentDataList.data.list
      console.log(departmentDataList, 'datalogggggggggggggg')
      // 获取角色列表数据
      const roleListData: any = await getListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const roleList = roleListData.data.list
      
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system
  }
})

//定义一个方法，每次刷新都会在main.js中调用这个方法，来再次加载vuex中的数据
export const setupStore = () => {
  store.dispatch('login/reloadLoginInfo')
}

export default store
