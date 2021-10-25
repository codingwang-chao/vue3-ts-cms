<template>
  <div class="tableStyle">
    <el-table :data="propList" border style="width: 100%">
      <template v-for="item in tableItems" :key="item.prop">
        <el-table-column 
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
    }
  }
}
</script>

<style lang='less' scoped>
  .tableStyle {
      padding: 20px;
      border-top: 20px solid #f5f5f5;
    }
</style>