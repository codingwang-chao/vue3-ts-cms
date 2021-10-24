<template>
  <div class="formContainer">
    <el-form ref="form" :model="form" :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.field">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template v-if="item.type === 'input'">
                <el-input style="max-width:180px" size="mini" :placeholder='item.placeholder'></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select size="mini" style="max-width: 180px" :placeholder="item.placeholder" >
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
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
        <el-form-item>
          <el-button type="primary" size="mini" @click="resetClick">重置</el-button>
          <el-button type="primary" size="mini" @click="seachClick">搜索</el-button>
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
        type: String,
        default: () => ({})
      }
    },
    data() {
      return {

      }
    },
    methods: {
      resetClick() {
        console.log('resetClick!')
      },
      seachClick() {
        console.log('seachClick!')
      },
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