<template>
  <div class="pageDialogContainer">
    <el-dialog title="收货地址" v-model="dialogFormVisible" destroy-on-close>

      <base-form :formItems="dialogFormItems" v-model="formData"></base-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="comfirmHandle">确 定</el-button>
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
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      dialogFormVisible: false
    }
  },
  methods: {
    comfirmHandle() {
      console.log(this.formData, 'formDataaaaaaaaaaaaaaaa')
    }
  }
}
</script>

<style>

</style>