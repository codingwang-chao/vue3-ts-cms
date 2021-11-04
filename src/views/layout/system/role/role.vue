<template>
  <div class="userContainer">
    <page-search
      :formItems='formItems'
      labelWidth='90px'
      @resetBtnClick='resetBtnClick'
      @searchBtnClick='searchBtnClick'
    >
    </page-search>

    <page-content 
      ref="pageContent"
      :tableItems='tableItems'
      pageName="role"
      @editHandle='editHandle'
      @addHandle="addHandle"
    />

    <page-dialog 
      ref="pageDialog" 
      :dialogFormItems="dialogFormItems" 
      :otherInfo='otherInfo'
      width='40%' 
      :title='title'
      pageName="role"
    >

     <el-tree
      :data="menusList"
      show-checkbox
      node-key="id"
      :props="{children: 'children', label: 'name'}"
      @check="check"
    />

    </page-dialog>

  </div>
</template>

<script>
import PageSearch from '@/components/page-seach'
import pageContent from '@/components/page-content'
import pageDialog from '@/components/page-dialog'
  export default {
    components: {
      PageSearch,
      pageContent,
      pageDialog
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
        ],
        dialogFormItems: [
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
        title: '新增',
        otherInfo: {}
      }
    },
    computed: {
      menusList() {
        return this.$store.state.entireMenu
      }
    },
    methods: {
      resetBtnClick() {
        this.$refs.pageContent.getDataList()
      },
      searchBtnClick(searchInfo) {
        this.$refs.pageContent.getDataList(searchInfo)
      },
      //编辑list数据
      editHandle(row) {
        this.title = '修改'
        this.dialogFormItems.forEach( item => {
          if(item.isHidden) {
            item.noSearch = true
          }else {
            item.noSearch = false
          }
        })
        this.$refs.pageDialog.dialogFormVisible = true
        //为了防止浅拷贝在接收这个参数时，pageContent里面做了深拷贝，如果在这里使用
        // this.formData =  { ...row}让后栽通过props传进去也不会双向绑定
        this.$refs.pageDialog.formData = row
      },
      //新增
      addHandle() {
        this.title = '新增'
        this.dialogFormItems.forEach( item => { item.noSearch = false })
        this.$refs.pageDialog.formData = {}
        this.$refs.pageDialog.dialogFormVisible = true
        this.dialogFormVisible = true
      },
      check(data1, data2) {
        const { checkedKeys, halfCheckedKeys } = data2
        const menuList = [...checkedKeys, ...halfCheckedKeys]
        this.otherInfo.menuList = menuList

        console.log(data1, 'data1')
        console.log(checkedKeys, 'data2')
        console.log(halfCheckedKeys, 'data2')
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