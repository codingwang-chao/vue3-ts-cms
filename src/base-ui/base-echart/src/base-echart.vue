<template>
  <div class="baseEcharts">
    <div ref="echartsRef" :style="echartsStyle"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

// 注册中国地图
import chinaJson from '../map/china.json'
echarts.registerMap('china', chinaJson)

export default {
  props: {
    echartsStyle: {
      type: Object,
      default: () => ({ width: '100%', height: '300px' })
    },
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      myEchart: ''
    }
  },
  watch: {
    option: {
      handler() {
        this.mountedEchart()
      }
    }
  },
  mounted() {
    this.myEchart = echarts.init(this.$refs.echartsRef)
    this.mountedEchart()
    // this.myEchart.setOption(this.option)

    //当屏幕大小发生改变时，重新画图
    window.addEventListener('resize', () => {
      this.myEchart.resize()
    })
  },
  methods: {
    mountedEchart() {
      // this.myEchart = echarts.init(this.$refs.echartsRef)
      //重新绘图只要setOption就好了，不用再init了，再次init就会出现警告但是又出现一个警告
      //`echarts.js?1be7:2178 There is a chart instance already initialized on the dom.`
      this.myEchart.setOption(this.option)
    }
  },
}
</script>

<style lang='less' scoped>

</style>