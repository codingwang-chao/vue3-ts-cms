<template>
  <div class="asideContainer">
    <div class="logo">
      <img src="~@/assets/images/logo.svg" alt="logo" class="img">
      <span class="title" v-if="!isCollapse">Vue3+TS</span>
    </div>
    <el-menu
      :uniqueOpened="false"
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenus" :key="item.id"> 
        <template v-if="item.type === 1">

          <el-sub-menu :index="item.id+''">

            <template #title>
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>

            <template v-for="child in item.children" :key="child.id">

              <el-menu-item :index="child.id + ''" @click="menuClick(child)">
                <i v-if="child.icon" :class="child.icon"></i>
                <span>{{child.name}}</span>
              </el-menu-item>
              
            </template>

          </el-sub-menu>  

        </template>

        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''" @click="menuClick(item)">
            <i :class="icon"></i>
            <template #title>{{item.name}}</template>
          </el-menu-item>
        </template>

      </template>
    </el-menu>
  </div>
</template>

<script>
import localStorageWc from '@/utils/localStorage'
import { getDefaultActive } from '@/utils/mapToRoutes'
export default {
  props: {
    isCollapse: {
      type: Boolean,
      defualt: false
    }
  },
  data() {
    return {
      defaultActive: localStorageWc.get('defaultActive')||'2'
    }
  },
  computed: {
    userMenus() {
      return this.$store.state.login.userMenus
    },
    // pathCurrent() {
    //   return route.path
    // }
  },
  // created: {
  //   aaDefaultActive()
  // },
  methods: {
    menuClick(value) {
      console.log(value, 'vualeeeeeeeeeee')
      localStorageWc.set('defaultActive', value.id+'')
      this.defaultActive = localStorageWc.get('defaultActive')
      this.$router.push(value.url)
    }
  },
  // aaDefaultActive() {
  //   getDefaultActive(userMenus,pathCurrent)
  // }
}
</script>

<style lang='less' scoped>
.asideContainer {
  height: 100%;
  background-color: #001529 !important;

  .logo {
    display: flex;
    height: 28px;
    padding: 16px 10px 16px 6px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}

</style>