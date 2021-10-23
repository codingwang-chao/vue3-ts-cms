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

          <!-- index必须为字符串类型,不能为数字 -->
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
import { getDefaultActive, firstMenu } from '@/utils/mapToRoutes'
export default {
  props: {
    isCollapse: {
      type: Boolean,
      defualt: false
    }
  },
  data() {
    return {
      defaultActive: firstMenu+''
    }
  },
  computed: {
    userMenus() {
      return this.$store.state.login.userMenus
    },
    pathCurrent() {
      return this.$route.path
    }
  },
  created() {
    this.getDefaultAvlue()
  },
  methods: {
    menuClick(value) {
      //方法1. 获取当前路由对应的菜单栏高亮,用户首次进来,现在默认高亮,点击其它菜单,保存次菜单的index到本地存储,
      // 再次刷新页面组件会自动记录当前路径,但是菜单栏高亮不会记录,所以这时就去取本地存储的高亮index,
      // 但是存在弊端,用户下次打开时,还会自动跳转到上次本地存储记录的菜单栏
      // localStorageWc.set('defaultActive', value.id+'')
      // this.defaultActive = localStorageWc.get('defaultActive')
      this.$router.push(value.url)
    },

    // 方法2. 通过当前路由每次刷新都动态匹配用户所有的菜单,来得到高亮菜单,如果第一次进入则取用户第一个权限菜单
    getDefaultAvlue() {
      this.defaultActive = getDefaultActive(this.userMenus, this.pathCurrent).id?.toString() || firstMenu.id+''
    }
  }
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