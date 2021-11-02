<template>
  <div class="formContainer">
    <div>
      <slot name="header"></slot>
    </div>
    <el-form ref="form" :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.field">
          <el-col v-bind="colLayout" v-if="item.isSearch">
            <el-form-item :label="item.label" :style="itemStyle" >
              <template v-if="item.type === 'input'">
                <el-input style="max-width:180px" size="mini" :placeholder='item.placeholder' v-model="formData[`${item.field}`]"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select size="mini" style="max-width: 180px" v-model="formData[`${item.field}`]" :placeholder="item.placeholder" >
                  <el-option 
                    :label="option.name" 
                    v-for="(option,index) in item.options" 
                    :key="index" 
                    :value="option.value">
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  range-separator="-"
                  size="mini"
                  style="max-width: 180px"
                  v-model="formData[`${item.field}`]"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
        <el-form-item>
          <slot name="footer">
            <!-- <el-button type="primary" size="mini" @click="resetClick">重置</el-button>
            <el-button type="primary" size="mini" @click="searchClick">搜索</el-button> -->
          </slot>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: {
      formItems: {
        type: Array,
        default: () => []
      },
      labelWidth: {
        type: String,
        default: '80px'
      },
      colLayout: {
        type: Object,
        default: () => ({
          xs: 24,
          sm: 12,
          md: 8,
          lg: 6,
          xl: 4
        })
      },
      itemStyle: {
        type: Object,
        default: () => ({})
      },
      modelValue: {
        type: Object,
        defalut: () => ({})
      }
    },
    data() {
      return {
        // formData: {}
      }
    },
    created() {

    },
    //watch的使用，当formData发生改变，将新的值发送给父组件，从而改变外面formData的值，它的只改变从而处理它改变后的操作
    watch: {
      formData: {
        handler(newValue) {
          this.$emit('update:modelValue', newValue)
        },
        deep: true
      }
    },
    //computed的使用，如果父组件通过v-model绑定给子组件的值modelValue发生改变，则会引起computed中fomrData的就算，将modelValue的值返回给formData，
    // formData依赖的值发生改变，从而改变formData的值，会使用return来改变值
    computed: {
      formData() {
        return this.modelValue
      }
    },
    methods: {
      // resetClick() {
      //   this.$emit('resetHandle', this.formData)
      //   console.log('resetClick!')
      // },
      // searchClick() {
      //   console.log('searchClick!')
      // },
    },
  }
</script>
<style lang="less" scoped>
  .formContainer {
    padding: 0px;

    .el-form-item {
      margin: 5px 10px;
    }
  }
</style>