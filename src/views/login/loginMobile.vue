<template>
  <div class="loginMobileContainer">
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleFormRef"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="username">
        <el-input
          v-model="ruleForm.phone"
          autocomplete="off"
        ></el-input>
      </el-form-item>

        <el-form-item label="验证码" prop="password">
          <div class="codeStyle">
            <el-input 
              style="margin-right:5px;"
              v-model="ruleForm.code"
              autocomplete="off"
            ></el-input>
            <el-button size="mini" type="primary">获取验证码</el-button>
          </div>
        </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        phone: '', 
        code: ''
      }
    }
  },
  methods: {
    loginBtn() {
      console.log(this.ruleForm, 'mobileForm')
    }
  },
}
</script>

<style lang='less' scoped>
.loginMobileContainer {
  height: 150px;
  .codeStyle {
    display: flex;
  }
}
</style>