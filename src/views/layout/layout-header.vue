<template>
  <div class="headerContainer">
    <div class="header">
      <i :class="isCollapse == false?'el-icon-s-fold':'el-icon-s-unfold'" @click="foldClick"></i>
    </div>

    <div class="flexContainer">
      <el-breadcrumb separator="/" class="breadCrumbContainer">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>

      <el-dropdown trigger="click" class="userInfoContainer">
        <span class="el-dropdown-link">
          {{$store.state.login.userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-setting">个人信息</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button" @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
import localStorageWc from '@/utils/localStorage'
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
    },
    logout() {
      this.$confirm('是否确认退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
      .then(() => {
        localStorageWc.clear()
        this.$router.replace('/login')
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出',
        })
      })
    }
  }
}
</script>

<style lang='less' scoped>
.headerContainer {
  width: 100%;
  display: flex;
  text-align: center;

  .header {
    display: flex;
    align-items: center;

    i {
      font-size: 25px;
      margin-right: 15px;
    }
  }

  .flexContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .breadCrumbContainer {
      height: 59px;
      line-height: 59px;
    }

    .userInfoContainer {
      height: 59px;
      line-height: 59px;
    }
  }
}
</style>