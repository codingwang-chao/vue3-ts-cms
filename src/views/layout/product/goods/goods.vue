<template>
  <div class="goodsContainer">
    <page-content 
      ref="pageContent"
      :tableItems='tableItems'
      pageName="goods"
    >

    <template #imgUrl='scope'>   
      <el-image
        style="width: 50px; height: 50px"
        :src="scope.row.imgUrl"
        :preview-src-list="[scope.row.imgUrl]"
        fit="fill"
      >
      </el-image>
    </template>

    <template #priceSlot='scope'>
      <span>{{'￥'+scope.row.newPrice}}</span>
    </template>
    
    </page-content>
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
        { prop: 'name', label: '名字' },
        { prop: 'address', label: '地址' },
        { prop: 'desc', label: '描述' },
        { prop: 'imgUrl', label: '图片', slotName: 'imgUrl' },
        { prop: 'newPrice', label: '新价格', slotName: 'priceSlot' },
        { prop: 'oldPrice', label: '旧价格' },
        { prop: 'status', label: '状态' },
        { prop: 'createAt', label: '创建时间', width: '260', slotName: 'createAt' },
        { prop: 'updateAt', label: '修改时间', width: '260', slotName: 'updateAt' }
      ]
    }
  },
}
</script>

<style>

</style>