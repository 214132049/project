<template>
  <div class="login-page">
    <form>
      <input type="text" placeholder="请输入用户名" v-model="userName">
      <input type="password" placeholder="请输入密码" v-model="password">
    </form>
    <cu-button size="large" type="primary" @click="login">登录</cu-button>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      userName: 'hy',
      password: '123456'
    }
  },
  methods: {
    login() {
      this.$api.login({
        userName: this.userName,
        password: this.password
      }).then(({ data }) => {
        window.sessionStorage.setItem('token', data.token)
        this.$store.dispatch('setUserInfo', data)
        this.$store.dispatch('setAddress', data.userOffice.deptName)
        this.$router.push({ path: '/home' })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login-page {
  text-align: center;
  padding: 0 5%;
  form {
    width: 100%;
    margin: 200px 0 50px;
  }
  input {
    width: 90%;
    padding: 20px 32px;
    margin-bottom: 20px;
    border-radius: 8px;
    .border();
  }
}
</style>
