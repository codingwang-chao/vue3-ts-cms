<template>
  <div class="headerContainer">
    <div class="header">
      <i :class="isCollapse == false?'el-icon-s-fold':'el-icon-s-unfold'" @click="foldClick"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    foldClick() {
      this.isCollapse = !this.isCollapse
      this.$emit('foldClick', this.isCollapse)
    }
  }
}
</script>

<style lang='less' scoped>
.headerContainer {

  .header {

    i {
      font-size: 25px;
    }
  }
}
</style>