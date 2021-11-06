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
        // this.myEchart = echarts.init(this.$refs.echartsRef)
        // this.myEchart.setOption(this.option)
        this.mountedEchart()
      },
      immediate: false
    }
  },
  mounted() {
    this.mountedEchart()
    // this.myEchart = echarts.init(this.$refs.echartsRef)
    // this.myEchart.setOption(this.option)

    //当屏幕大小发生改变时，重新画图
    window.addEventListener('resize', () => {
      this.myEchart.resize()
    })
  },
  methods: {
    mountedEchart() {
      this.myEchart = echarts.init(this.$refs.echartsRef)
      this.myEchart.setOption(this.option)
    }
  },
}
</script>

<style lang='less' scoped>

</style>