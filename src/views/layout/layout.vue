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
        <el-main class="main-info">
          <router-view />
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

    .main-info {
      background-color: rgb(17, 5, 5);
      padding-top: 20px;
      line-height: 30px;
      background-color: #eef0f4;
      border-radius: 5px;
    }
  }

  .aside-layout {
    height: 100%;
    
    //展开关闭左侧菜单栏的过度动画
    transition: width 0.5s;
  }
}
</style>