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
      :showSelectBox="false"
      @editHandle='editHandle'
      @addHandle="addHandle"
    />

    <page-dialog 
      ref="pageDialog" 
      :dialogFormItems="dialogFormItemsComputed" 
      width='40%' 
      :title='title'
      pageName="users"
    />

  </div>
</template>

<script>
import pageSearch from '@/components/page-seach'
import pageContent from '@/components/page-content'
import PageDialog from '@/components/page-dialog/src/pageDialog.vue'
  export default {
    components: {
      pageSearch,
      pageContent,
      PageDialog
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

        ],
        dialogFormItems: [
          {
            field: 'name',
            label: '用户名',
            type: 'input',
            // placeholder: '请输入用户名'
          },
          {
            field: 'realname',
            label: '真实姓名',
            type: 'input',
            // placeholder: '请输入真实姓名'
          },
          {
            field: 'password',
            label: '密码',
            type: 'input',
            isHidden: true
            // placeholder: '请输入密码',
          },
          {
            field: 'cellphone',
            label: '电话号码',
            type: 'input',
            // placeholder: '请输入电话号码'
          },
          {
            field: 'departmentId',
            type: 'select',
            label: '选择部门',
            // placeholder: '请选择部门',
            options: []
          },
          {
            field: 'roleId',
            type: 'select',
            label: '选择角色',
            // placeholder: '请选择角色',
            options: []
          }
        ],
        formData: {},
        title: '',
      }
    },
    computed: {
      //获取下拉框选项，更新dialogFormItem，解决页面刷新时，vuex数据为空问题
      dialogFormItemsComputed ()  {
        this.dialogFormItems.forEach( item => {
          if(item.field == 'departmentId') {
            item.options = this.$store.state.entireDepartment.map( item => ({
              name: item.name,
              value: item.id
            }))
          }
        })
        this.dialogFormItems.forEach( item => {
          if(item.field == 'roleId') {
            item.options = this.$store.state.entireRole.map( item => ({
              name: item.name,
              value: item.id
            }))
          }
        })
        return this.dialogFormItems
      }
    },
    methods: {
      //重置搜索表格
      resetBtnClick() {
        this.$refs.pageContent.getDataList()
      },
      //点击搜索
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
        this.$refs.pageDialog.formData = row
        //为了防止浅拷贝在接收这个参数时，pageContent里面做了深拷贝，如果在这里使用
        // this.formData =  { ...row}让后栽通过props传进去也不会双向绑定
        this.$refs.pageDialog.dialogFormVisible = true
      },
      //新增
      addHandle() {
        this.title = '新增'
        this.dialogFormItems.forEach( item => { item.noSearch = false })
        this.$refs.pageDialog.formData = {}
        this.$refs.pageDialog.dialogFormVisible = true
        this.dialogFormVisible = true
      }
    }
  }
</script>

<style lang="less" scoped>
  // .userContainer {
  //   // background-color: red;
  // }
</style>