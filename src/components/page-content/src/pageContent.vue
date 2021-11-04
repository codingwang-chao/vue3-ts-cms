<template>
  <div>
    <base-table 
      :propList='dataList' 
      :tableItems='tableItems' 
      :showSelectBox='true' 
      showIndexColumn 
      @selectionChange='handleSelectionChange'
      :childrenProp='childrenProp'
    >

      <template #headerLeft>
        <span>用户列表</span>
      </template>

      <!-- 如果里面有对应的插槽就会匹配替代里面的内容， 如果里面没有对应插槽的名字，就显示里面默认的名字 -->
      <!-- base-table里面的插槽名都是经过循环遍历的，tableItems里面传入的插槽名，在这里有对应的就会将这里的显示在table表单里 -->
      <template #headerRight v-if="isCreate">
        <el-button type="primary" size="mini" @click="addHandle">新增</el-button>
        <el-button type="primary" size="mini" icon="el-icon-refresh"></el-button>
      </template>

      <template #enable='scope'>
        <el-button type="primary" size="mini">{{scope.row.enable == 1 ?'启用':'禁用'}}</el-button>
      </template>

      <template #createAt='scope'>
        <span>{{$filters.formatTime(scope.row.createAt)}}</span>
      </template>

      <template #updateAt='scope'>
        <span>{{$filters.formatTime(scope.row.updateAt)}}</span>
      </template>

      <template #handler='scope'>
        <el-button type="text" size="mini" v-if="isUpdate" @click="editHandle(scope.row)">编辑</el-button>
        <el-button type="text" size="mini" v-if="isDelete" @click="deleteHandle(scope.row)">删除</el-button>
      </template>

      <!-- 这里是插槽嵌套插槽、通过外面一层的template #[itemSlot]匹配放到baseTable的插槽位置 -->
      <!-- 再通过里面的slot插槽来匹配父组件的template插槽，将使用它的插槽放到这个位置，然后通过外面一层的template插槽传到baseTable插槽位置 -->
      <template v-for="itemSlot in selfSlotNameArr" :key="itemSlot" #[itemSlot]='scope'>
        <slot :name='itemSlot' :row='scope.row'></slot>
      </template>

      <template #footer v-if="footerSlot">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="dataCount"
        >
        </el-pagination>
      </template>

    </base-table>
  </div>
</template>

<script>
import baseTable from '@/base-ui/base-table'
import userPermission from '@/hooks/usePermission'
export default {
  components: {
    baseTable
  },
  props: {
    tableItems: {
      type: Object,
      required: true
    },
    pageName: {
      type: String, 
      required: true
    },
    childrenProp: {
      type: Object,
      default: () => ({})
    },
    footerSlot: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      pageSize: 10,
      currentPage: 1,
      isCreate: false,
      isUpdate: false,
      isDelete: false,
      isQuery: false
    }
  }, 
  computed: {
    dataList() {
      return this.$store.state.system[`${this.pageName}ListData`]
    },
    dataCount() {
      return this.$store.state.system[`${this.pageName}Count`]
    },
    //获取自定义动态插槽
    selfSlotNameArr() {
      const arr =  this.tableItems.filter( v => {
        if(v.slotName) {
          if(v.slotName == 'enable' || v.slotName == 'createAt' || v.slotName == 'updateAt' || v.slotName == 'handler') {
            return false
          }else {
            return true
          }
        }
      })
      return arr.map( t => t.slotName )
    }
  },
  //最好在mounted的生命周期函数中请求数据
  mounted() {
    this.getDataList()
    this.getBtnPermission()
  },
  methods: {
    //初始化表格数据
    getDataList( searchInfo = {} ) {
      this.$store.dispatch('system/getPageListAction', {
        pageName: this.pageName,
        queryInfo: {
          offset: (this.currentPage-1) * this.pageSize,
          size: this.pageSize,
          ...searchInfo
        },
      })
    },
    //得到页面的按钮权限，来是否展示
    getBtnPermission() {
      this.isCreate = userPermission(this.pageName, 'create')
      this.isUpdate = userPermission(this.pageName, 'update')
      this.isDelete = userPermission(this.pageName, 'delete')
      this.isQuery = userPermission(this.pageName, 'query')
    },
    //选择box
    handleSelectionChange(value) {
      console.log(value)
    },
    //每页页数改变
    handleSizeChange(size) {
      this.pageSize = size
      this.getDataList()
    },
    //页码改变
    handleCurrentChange(value) {
      this.currentPage = value
      this.getDataList()
    },
    //删除
    deleteHandle(row) {
      this.$store.dispatch('system/deleteListAction', {
        id: row.id,
        pageName: this.pageName
      })
    },
    //编辑
    editHandle(row) {
      // 不能直接将值直接传过去，直接传过去是浅拷贝，会双向绑定，所以要深拷贝
      const selectRow = JSON.stringify(row)
      this.$emit('editHandle', JSON.parse(selectRow))
    },
    //新增
    addHandle() {
      this.$emit('addHandle')
    }
  }
}
</script>

<style>

</style>