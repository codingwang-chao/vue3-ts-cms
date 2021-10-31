<template>
  <div class="userContainer">
    <page-search
      :formItems='formItems'
      labelWidth='90px'
      @resetBtnClick='resetBtnClick'
      @searchBtnClick='searchBtnClick'
    ></page-search>

    <page-content 
      ref="pageContent"
      :tableItems='tableItems'
      pageName="users"
    />

  </div>
</template>

<script>
import PageSearch from '@/components/page-seach'
import pageContent from '@/components/page-content'
  export default {
    components: {
      PageSearch,
      pageContent
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
    methods: {
      resetBtnClick() {
        this.$refs.pageContent.getDataList()
      },
      searchBtnClick(searchInfo) {
        this.$refs.pageContent.getDataList(searchInfo)
      }
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