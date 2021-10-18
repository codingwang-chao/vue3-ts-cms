<template>
  <div class="loginContainer">
    <div class="center-login">
      <h1>后台管理系统</h1>
      <el-tabs type="border-card" class="login" v-model="activeLogin" stretch>
        <el-tab-pane name="userLogin">
          <template #label>
            <span><i class="el-icon-user"></i> 账号登录</span>
          </template>
          <login-user ref="userLogin" />
        </el-tab-pane>
        <el-tab-pane name="mobileLogin">
          <template #label>
            <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
          </template>
          <login-mobile ref="mobileLogin" />
        </el-tab-pane>
      </el-tabs>
      <el-button class="buttonLogin" type="primary" @click="loginClick">登录</el-button>
    </div>
  </div>
</template>

<script>
import loginUser from './loginUser.vue'
import loginMobile from './loginMobile.vue'
export default {
  components: {
    loginUser,
    loginMobile
  },
  data() {
    return {
      activeLogin: 'userLogin'
    }
  },
  methods: {
    loginClick() {
      if(this.activeLogin === 'userLogin') {
        this.$refs.userLogin.loginBtn()
      } else if(this.activeLogin === 'mobileLogin') {
        this.$refs.mobileLogin.loginBtn()
      }
    }
  },
}
</script>

<style lang='less' scoped>
.loginContainer {
  height: 100%;  
  background: url(../../assets/images/bj.jpg) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .center-login {
    width: 320px;
    margin-bottom: 120px;
  }
  .buttonLogin {
    margin-top: 15px;
    width: 320px;
  }
}
</style>