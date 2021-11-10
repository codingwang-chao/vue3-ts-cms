<template>
  <div class="loginUserContainer">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleFormRef"

      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input
          v-model="ruleForm.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          show-password
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="login-control">
      <el-checkbox label="记住密码" v-model='isKeepPassword'></el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
  </div>
</template>

<script>
import localStorageWc from '@/utils/localStorage'
export default {
  data() {
    return {
      isKeepPassword: true,
      ruleForm: {
        name: localStorageWc.get('name') ?? 'coderwhy',
        password: localStorageWc.get('password') ?? '123456'
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'change'},
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur'},
          { min: 6, max: 16, message: '长度在6到16个字符之间', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    loginBtn() {
      this.$refs.ruleFormRef.validate( async flag => {
        if(flag) {
          if(this.isKeepPassword) {
            localStorageWc.set('name', this.ruleForm.name)
            localStorageWc.set('password', this.ruleForm.password)
          }else {
            localStorageWc.remove('name')
            localStorageWc.remove('password')
          }

          //在store中login完成登录的操作
          this.$store.dispatch('login/accountLoginAction', this.ruleForm)
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
.loginUserContainer {
  height: 150px;
  .login-control {
    display: flex;
    justify-content: space-between;
  }
}
</style>
