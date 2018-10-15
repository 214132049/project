<template>
  <div class="add-address-page">
    <textarea rows="2" class="input-box" maxlength="30" placeholder="请输入配送地址" v-model="address"></textarea>
    <div class="btn-box">
      <div>
        <cu-button size="large" type="primary" @click="submit">保存并使用</cu-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddAddressPage',
  data() {
    return {
      address: ''
    }
  },
  methods: {
    submit() {
      let local = JSON.parse(window.localStorage.getItem('localAddress')) || {}
      let address = local[this.$store.state.userInfo.id] || []
      let isExist = address.some(v => v == this.address)
      if (isExist) {
        this.$toast('地址已存在')
        return
      }
      address.push(this.address)
      let userId = this.$store.state.userInfo.id
      window.localStorage.setItem('localAddress', JSON.stringify({ [userId]: address }))
      this.$store.dispatch('setAddress', this.address)
      this.$router.replace({ path: '/confirm' })
    }
  }
}
</script>

<style lang="less" scoped>
.add-address-page {
  background: #fff;
  .input-box {
    box-sizing: border-box;
    height: 196px;
    width: 100%;
    padding: 36px 32px;
    color: #333;
    font-size: 30px;
    border: 0;
    outline: none;
    line-height: 48px;
    ::-webkit-input-placeholder {
      font-size: 30px;
      color: #999;
    }
  }
  .btn-box {
    padding: 0 32px;
    &>div {
      padding: 28px 0;
      border-top: 1px solid @border-color; /* no */
    }
  }
}
</style>
