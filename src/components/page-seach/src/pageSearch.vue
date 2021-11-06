<template>
  <div class="userContainer">
    <base-form 
      ref="baseForm"
      :formItems='formItems' 
      v-model='formData' 
      :labelWidth='labelWidth'
    >
      <template v-slot:header>
        <div>这是header插槽</div>
      </template>
      <template #footer>
        <el-button type="primary" size="mini" @click="resetHandle">重置</el-button>
        <el-button type="primary" size="mini" @click="searchClick">搜索</el-button>
      </template>
    </base-form>
  </div>
</template>

<script>
import baseForm from '@/base-ui/base-form/index.js'
  export default {
    components: {
      baseForm
    },
    props: {
      formItems: {
        type: Array,
        default: () => ([])
      },
      labelWidth: {
        type: String,
        default: '90px',
      },
    },
    data() {
      return {
        formData: {},
        initFormData: {}
      }
    },
    created() {
      this.init()  
    },
    computed: {

    },
    methods: {
      //初始化formData表格数据，formData从formItems过滤得来
      init() {
        this.formItems.forEach(item => {
          this.initFormData[item.field] = ''
        });
        this.formData = this.initFormData
      },
      //重置表格输入框要再次初始化，重新赋值为initFormData是不能完成重置操作的，
      // 因为init初始化赋值时，时浅拷贝，formData与initFormData存储地址一样，其实改变其中一个值另外一个值会一起变化
      resetHandle() {
        this.init()
        this.$emit('resetBtnClick')
      },
      //数据搜索
      searchClick() {
        console.log(this.formData, 'formDATA')
        this.$emit('searchBtnClick', this.formData)
      }
    }
  }
</script>
<style lang="less" scoped>
.userContainer {
  background-color: #ffffff;
}
  
</style>