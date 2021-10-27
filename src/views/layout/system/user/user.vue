<template>
  <div class="userContainer">
    <page-search
      :formItems='formItems'
      labelWidth='90px'
    ></page-search>

    <base-table :propList='usersList' :tableItems='tableItems'>

      <template #enable='scope'>
        <el-button type="primary" size="mini">{{scope.row.enable==1?'启用':'禁用'}}</el-button>
      </template>

      <template #createAt='scope'>
        <span>{{$filters.formatTime(scope.row.createAt)}}</span>
      </template>

      <template #updateAt='scope'>
        <span>{{$filters.formatTime(scope.row.updateAt)}}</span>
      </template>

    </base-table>

  </div>
</template>

<script>
import PageSearch from '@/components/page-seach'
import baseTable from '@/base-ui/base-table'
  export default {
    components: {
      PageSearch,
      baseTable
    },
    data() {
      return {
        formItems: [
          {
            label: '用户名',
            field: 'name',
            type: 'input',
            placeholder: '请输入用户名'
          },
          {
            label: '真实姓名',
            field: 'realname',
            type: 'input',
            placeholder: '请输入真实姓名'
          },
          {
            label: '电话号码',
            field: 'cellphone',
            type: 'input',
            placeholder: '请输入电话号码'
          },
          {
            label: '用户状态',
            field: 'enable',
            type: 'select',
            placeholder: '请选择用户状态',
            options: [
              {
                name: '启用',
                value: 1
              },
              {
                name: '禁用',
                value: 0
              }
            ]
          },
          {
            field: 'createAt',
            type: 'datepicker',
            label: '创建时间',
            otherOptions: {
              startPlaceholder: '开始时间',
              endPlaceholder: '结束时间',
              type: 'daterange'
            }
          }
        ],
        tableItems: [
          {
            prop: 'name',
            label: '用户名'
          },
          { prop: 'realname', label: '真实姓名' },
          { prop: 'cellphone', label: '电话号码', width: '150' },
          { prop: 'enable', label: '状态', slotName: 'enable' },
          { prop: 'createAt', label: '创建时间', width: '300', slotName: 'createAt' },
          { prop: 'updateAt', label: '修改时间', width: '300', slotName: 'updateAt' },
          { prop: '操作', label: '操作', width: '120', slotName: 'handler' }

        ]
      }
    },
    //最好在mounted的生命周期函数中请求数据
    mounted() {
      this.init()
    },
    computed: {
      usersList() {
        return this.$store.state.system.usersListData
      },
      usersCount() {
        return this.$store.state.system.usersCount
      }
    },
    methods: {
      init() {
        this.$store.dispatch('system/getPageListAction', {
          pageUrl: '/users/list',
          queryInfo: {
            offset: 0,
            size: 10
          }
        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .userContainer {
    .tableStyle {
      padding: 20px;
      border-top: 20px solid #f5f5f5;
    }
  }
</style>