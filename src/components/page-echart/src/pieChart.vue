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
    radius: {
      default: '50%',
    },
    center: {
      default: ['50%', '50%']
    },
    roseType: {
      required: false
    },
    itemStyle: {
      required: false
    },
    legend: {
      default: {
        orient: 'horizontal',
        left: 'left'
      }
    },
    seriesData: {
      type: Array
    }
  },
  data() {
    return {

    }
  },
  computed: {
    option() {
      return ({
        tooltip: {
          trigger: 'item'
        },
        legend: this.legend,
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: this.radius,
            center: this.center,
            roseType: this.roseType,
            itemStyle: this.itemStyle,

            //玫瑰图
            // radius: [50, 150],
            // center: ['50%', '50%'],
            // roseType: 'area',
            // itemStyle: {
            //   borderRadius: 8
            // },

            data: this.seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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