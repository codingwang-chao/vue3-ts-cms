<template>
  <div class="layoutContainer">
    <el-container class="container-layout">
      <el-aside :width="isCollapse==false?'210px':'64px'" class="aside-layout">
        <layout-aside :isCollapse='isCollapse' />
      </el-aside>
      <el-container>
        <el-header>
          <layout-header @foldClick='foldClick' />
        </el-header>
        <el-main>
          <div class="main-info">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from './layout-aside.vue'
import LayoutHeader from './layout-header.vue'
export default {
  components: { layoutAside, LayoutHeader },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    foldClick(value) {  
      this.isCollapse = value
    }
  },
}
</script>

<style lang='less' scoped>
.layoutContainer {
  height: 100%;
  width: 100%;

  .container-layout {
    height: 100%;

    .el-main {
      padding-top: 10px;
      line-height: 30px;
      text-align: center;
    }

    .main-info {
      background-color: #ffffff;
      border-radius: 5px;
    }
  }

  .aside-layout {
    height: 100%;
    
    //展开关闭左侧菜单栏的过度动画
    transition: width 0.5s;
  }
}
.el-header,
  .el-footer {
    background-color: #ffffff;
    color: var(--el-text-color-primary);
    line-height: 60px;
  }

  .el-aside {
    background-color: #33404d;
    color: var(--el-text-color-primary);
    line-height: 100vh;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

</style>