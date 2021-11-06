<template>
  <div class="dashBoard">
    <el-row :gutter="10">
      <el-col :span="7">
        <base-card title="分类商品数量">
          <pie-chart :seriesData='pieData'></pie-chart>
        </base-card>
      </el-col>
      <el-col :span="10">
        <base-card title="不同城市商品销量">
          <china-chart :seriesData="chinaData"></china-chart>
        </base-card>
      </el-col>
      <el-col :span="7">
        <base-card title="分类商品数量">
          <pie-chart :seriesData='pieData' :radius="[10, 100]" roseType="area" :itemStyle='{ borderRadius: 8}' legend=""></pie-chart>
        </base-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content">
      <el-col :span="12">
        <base-card title="分类商品销量">
          <line-chart :seriesData='lineData.seriesData' :xAxisData="lineData.xAxisData"></line-chart>
        </base-card>
      </el-col>
      <el-col :span="12">
        <base-card title="分类商品收藏">
          <bar-chart :seriesData='barData.seriesData' :xAxisData='barData.xAxisData'></bar-chart>
        </base-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import baseCard from '@/base-ui/base-card'
import { pieChart, lineChart, barChart, chinaChart } from '@/components/page-echart'

export default {
  components: { 
    baseCard,
    pieChart,
    lineChart,
    barChart,
    chinaChart
  },
  data() {
    return {
     
    }
  },
  computed: {
    pieData() {
      const data = this.$store.state.dashboard.categoryGoodsCount.map( v => ({
        name: v.name,
        value: v.goodsCount
      }))
      return data
    },
    lineData() {
      const seriesData = []
      const xAxisData = []
      this.$store.state.dashboard.categoryGoodsSale.map((item) => {
        seriesData.push(item.goodsCount)
        xAxisData.push(item.name)
      })
      return {
        seriesData,
        xAxisData
      }
    },
    barData() {
      const seriesData = []
      const xAxisData = []
      this.$store.state.dashboard.categoryGoodsFavor.map((item) => {
        seriesData.push(item.goodsFavor)
        xAxisData.push(item.name)
      })
      return {
        seriesData,
        xAxisData
      }
    },
    chinaData() {
      return this.$store.state.dashboard.addressGoodsSale.map((item) => ({
        name: item.address,
        value: item.count
      }))
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$store.dispatch('dashboard/initializeDashboardData')
    }
  }
}
</script>

<style lang='less' scoped>
.content {
  padding-top: 20px;
}
</style>