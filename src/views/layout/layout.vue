<template>
  <div class="layoutContainer">
    <el-container class="container-layout">
      <el-aside width="250px" class="aside-layout">
        <layout-aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from './layout-aside.vue'
export default {
  components: { layoutAside },
  data() {
    return {
      
    }
  },
}
</script>

<style lang='less' scoped>
.layoutContainer {
  height: 100%;

  .container-layout {
    height: 100%;
  }

  .aside-layout {
    height: 100%;
  }
}
.el-header,
  .el-footer {
    background-color: #263242;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #33404d;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 100vh;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

</style>