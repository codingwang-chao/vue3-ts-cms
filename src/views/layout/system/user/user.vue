<template>
  <div class="userContainer">
    <page-search
      :formItems='formItems'
      labelWidth='90px'
    ></page-search>
  </div>
</template>

<script>
import PageSearch from '@/components/page-seach'
  export default {
    components: {
      PageSearch
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
      }
    },
    //最好在mounted的生命周期函数中请求数据
    mounted() {
      this.init()
    },
    methods: {
      init() {
        const queryInfo = {
          url: 'users'
        }
        this.$store.dispatch('system/getPageListAction', queryInfo)
      }
    }
  }
</script>