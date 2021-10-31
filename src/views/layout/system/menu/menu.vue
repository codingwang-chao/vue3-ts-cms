<template>
  <div>
    <page-content 
      ref="pageContent"
      :tableItems='tableItems'
      pageName="menu"
      :childrenProp='childrenProp'
      :footerSlot='false'
    />
  </div>
</template>

<script>
import pageContent from '@/components/page-content'
export default {
  components: {
    pageContent
  },
  data() {
    return {
      tableItems: [
        { prop: 'name', label: '菜单名称', width: '100' },
        { prop: 'type', label: '类型', width: '60' },
        { prop: 'url', label: '菜单url', width: '100' },
        { prop: 'icon', label: '菜单icon', width: '100' },
        { prop: 'permission', label: '按钮权限', width: '100' },
        {
          prop: 'createAt',
          label: '创建时间',
          width: '220',
          slotName: 'createAt'
        },
        {
          prop: 'updateAt',
          label: '更新时间',
          width: '220',
          slotName: 'updateAt'
        }
      ],
      childrenProp: {
        rowKey: 'id',
        treeProps : { children: 'children'}
      }
    }
  },
}
</script>

<style>

</style>