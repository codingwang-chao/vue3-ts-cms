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
      pageName="role"
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
            field: 'name',
            label: '角色名',
            type: 'input',
            placeholder: '请输入角色名'
          },
          {
            field: 'intro',
            label: '权限分布',
            type: 'input',
            placeholder: '请输入权限分布'
          }
        ],
        tableItems: [
          { prop: 'intro', label: '权限分布' },
          { prop: 'name', label: '角色名' },
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