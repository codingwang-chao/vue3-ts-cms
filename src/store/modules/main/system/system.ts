
import { Module } from "vuex/types/index.js";
import type { ISystemState } from './types'
import type { IRootState } from '@/store/types'
import { getListData, htttpDeleteHandle, httpAddHandle, httpEditHandle } from '@/api/main/system/system'
import message from "element-plus/lib/components/message";
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
    //获取页面数据的actions方法
    async getPageListAction({ commit }, payLoad) {
      const { data }: any = await getListData(`/${payLoad.pageName}/list`, payLoad.queryInfo)
      const changeName = payLoad.pageName.slice(0,1).toUpperCase() + payLoad.pageName.slice(1)
      commit(`change${changeName}ListData`, data.list)
      commit(`change${changeName}Count`, data.totalCount)
    },

    //删除页面数据
    async deleteListAction({dispatch}, payLoad) {
      const url = `${payLoad.pageName}/${payLoad.id}`
      const res: any = await htttpDeleteHandle(url)
      message.error(res.data)
      //刷新列表
      dispatch('getPageListAction', {
        pageName: payLoad.pageName,
        queryInfo: {
          size: 10,
          offset: 0
        }
      })
    },

    //新增页面数据
    async addHandle( { dispatch }, payLoad) {
      const { pageName, data } = payLoad
      const url = `/${pageName}`
      const res: any = await httpAddHandle(url, data)
      message.info(res.data)

      //刷新列表
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          size: 10,
          offset: 0
        }
      })
    },

    //修改页面数据
    async editHandle( { dispatch }, payLoad) {
      const { pageName, data } = payLoad
      const url = `/${pageName}/${data.id}`
      const res: any = await httpEditHandle(url, data)
      message.info(res.data)

      //刷新列表
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          size: 10,
          offset: 0
        }
      })
    },

  }
}

export default systemStore