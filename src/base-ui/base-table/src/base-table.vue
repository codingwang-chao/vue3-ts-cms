<template>
  <div class="tableStyle">
    <div class="header">

      <div>
        <slot name="headerLeft"></slot>
      </div>

      <div>
        <slot name="headerRight"></slot>
      </div>

    </div>

    <el-table 
      :data="propList" 
      border 
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProp"
    >

      <el-table-column
        type="selection"
        width="35"
        v-if="showSelectBox"
      > 
      </el-table-column>

      <el-table-column
        type="index"
        width="50"
        label="序号"
        align="center"
        v-if="showIndexColumn"
      > 
      </el-table-column>

      <template v-for="item in tableItems" :key="item.prop">
        <el-table-column 
          show-overflow-tooltip
          align="center" 
          :prop="item.prop" 
          :label="item.label" 
          :width="item.width?item.width:'180'"
        >
        <template #default="scope">          
          <!-- 里面再套一个插槽,:name是绑定的插槽名,:row是传出去的绑定值,就和上面#default='scope'的scope是一样的 -->
          <slot :name='item.slotName' :row='scope.row'>
            <!-- 默认显示下面内容,如果有插槽就会替代这个内容 -->
            {{scope.row[`${item.prop}`]}}
          </slot>
        </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="footer">
      <slot name="footer"></slot>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    propList: {
      type: Array,
      default: () => ([])
    },
    tableItems: {
      type: Array,
      default: () => ([])
    },
    showSelectBox: {
      type: Boolean,
      default: false
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    childrenProp: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    handleSelectionChange(value) {
      this.$emit('selectionChange', value)
    }
  },
}
</script>

<style lang='less' scoped>
  .tableStyle {
      padding: 20px;
      border-top: 20px solid #f5f5f5;

      .header{ 
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 10px 10px 0px;
      }

      .footer {
        display: flex;
        justify-content: end;
        margin-top: 10px;
      }
    }
</style>