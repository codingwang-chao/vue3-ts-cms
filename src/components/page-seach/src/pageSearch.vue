<template>
  <div class="userContainer">
    <base-form 
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
        formData: {
          name: '',
          realname: '',
          cellphone: '',
          enable: '',
          createAt: '',
        }
      }
    },
    methods: {
      resetHandle() {
        this.formData = {
          name: '',
          realname: '',
          cellphone: '',
          enable: '',
          createAt: '',
        }
      },
      searchClick() {
        console.log(this.formData, 'formDATA')
      }
    }
  }
</script>