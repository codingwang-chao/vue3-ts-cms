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
    changeEntireMenu(state, payLoad) {
      state.entireMenu = payLoad
    }
  },
  actions: {
    async getInitialPageListData({ commit }) {

      //获取部门列表数据
      const departmentDataList: any = await getListData( '/department/list', {
        offset: 0,
        size: 1000
      })
      const departmentList = departmentDataList.data.list

      // 获取角色列表数据
      const roleListData: any = await getListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const roleList = roleListData.data.list

      //获取角色列表数据
      const menuListData: any = await getListData('/menu/list', {
        offset: 0,
        size: 1000
      })
      const menuList: any = menuListData.data.list

      console.log(menuList, 'menuKListttttttttttttttt')
      
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
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
