<template>
  <div class="select-address-page">
    <dl class="address-list">
      <dt class="address-item oldAddress">
        <span>{{ $store.state.address }}</span>
        <i class="icon"></i>
      </dt>
      <dd v-for="(address, index) in address" :key="index" @click="selectAddress(index)" class="address-item">
        <span>{{ address }}</span>
      </dd>
    </dl>
    <div class="btn" @click="addAddress"><i class="icon"></i>新增地址</div>
  </div>
</template>
<script>
export default {
  name: 'SelectAddressPage',
  data() {
    let local = JSON.parse(window.localStorage.getItem('localAddress')) || {}
    let address = local[this.$store.state.userInfo.id] || []
    return {
      address: address,
      currentIndex: -1
    }
  },
  methods: {
    selectAddress(index) {
      this.currentIndex = index
      this.$store.dispatch('setAddress', this.address[index])
      this.$router.back()
    },
    addAddress() {
      this.$router.replace({ path: '/add-address' })
    }
  }
}
</script>

<style lang="less" scoped>
.select-address-page {
  .address-list{
    .address-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 32px;
      background: #fff;
      line-height: 1.3;
      color: #333;
      font-size: 34px;
      .icon {
        display: inline-block;
        width: 30px;
        height: 20px;
        margin-left: 10px;
        background: url('~@/assets/images/ic-right@2x.png') no-repeat center;
        background-size: 100%;
      }
      & + .address-item {
        border-bottom: 1px solid #e5e5e5;
      }
      &.oldAddress {
        margin-bottom: 20px;
        border-top: 0;
      }
      &:active {
        background: #F2F2F2;
      }
    }
  }
  .btn {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 98px;
    line-height: 98px;
    font-size: 34px;
    color: #38C7C4;
    text-align: center;
    border-top: 1px solid @border-color; /* no */
    background: #fff;
    .icon {
      display: inline-block;
      width: 28px;
      height: 28px;
      margin-right: 20px;
      background: url('~@/assets/images/adress-btn-add@2x.png') no-repeat center;
      background-size: 100%;
    }
  }
}
</style>
