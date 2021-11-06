<template>
  <base-echart :option='option'></base-echart>
</template>

<script>
import baseEchart from '@/base-ui/base-echart/index.js'
export default {
  components: { 
    baseEchart
  },
  props: {
    xAxisData: {
      type: Array,
      default: () => ([])
    },
    seriesData: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    option() {
      return ({
        xAxis: {
          type: 'category',
          data: this.xAxisData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.seriesData,
            type: 'line'
          }
        ]
      })
    }
  }
}
</script>

<style lang='less' scoped>
.chart1{
  height: 500px;
  width: 500px;
}
</style>