<template>
  <div>
    <el-button @click="deepClone([{a:1,b:2}, {c:3, d:4}, ['d', 6]])" type='primary' size='mini'>深拷贝</el-button>
  </div>
</template>

<script>
export default {
  created() {
    
  },
  methods: {
    deepClone(data) {
      var arr = data instanceof Array ? [] : {}
      if( typeof data !== 'object') {
        return data
      }else {
        for(var item in data) {
          arr[item] = typeof data[item] == 'object' ? this.deepClone(data[item]) : data[item]
        }
      }
      console.log(arr, 'arr')
      return arr
    }
  }
}
</script>

<style>

</style>