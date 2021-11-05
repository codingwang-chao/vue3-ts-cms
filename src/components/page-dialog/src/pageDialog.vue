<template>
  <div class="pageDialogContainer">
    <el-dialog 
      :title="title" 
      v-model="dialogFormVisible" 
      destroy-on-close
      :width="width"
    >

      <base-form :formItems="dialogFormItems" v-model="formData" :colLayout="colLayout"></base-form>

      <slot></slot>

      <template #footer>
        <span class="dialog-footer">
          <el-button size="mini" @click="dialogFormVisible = false">取 消</el-button>
          <el-button size="mini" type="primary" @click="comfirmHandle">确 定</el-button>
        </span>
      </template>

    </el-dialog>
  </div>
</template>

<script>
import baseForm from '@/base-ui/base-form'
export default {
  components: {
    baseForm
  },
  props: {
    dialogFormItems: {
      type: Array,
      default: () => ([])
    },
    // 如果直接从页面传进来会导致与页面数据双向绑定
    // formData: {
    //   type: Object,
    //   default: () => ({})
    // },
    colLayout: {
      type: Object,
      default: () => ({
        span: 12
      })
    },
    width: {
      type: String,
      default: '40%'
    },
    title: {
      type: String,
      default: '新增'
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      formData: {}
    }
  },
  methods: {
    comfirmHandle() {
      if(this.title == '新增') {
        this.$store.dispatch('system/addHandle', {
          pageName: this.pageName,
          data: { ...this.formData, ...this.otherInfo }
        })
      }else if(this.title == '修改'){
        this.$store.dispatch('system/editHandle', {
          pageName: this.pageName,
          data: { ...this.formData, ...this.otherInfo }
        })
      }
      this.dialogFormVisible = false
    }
  }
}
</script>

<style>

</style>