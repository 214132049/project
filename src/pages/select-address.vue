<template>
  <div class="select-address-page">
    <dl class="address-list">
      <dt class="address-item oldAddress">
        <span>2号楼5层手术科室</span>
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
  name: 'SelectAddress',
  data() {
    return {
      address: new Array(4).fill('2号楼5层手术科室'),
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
      this.$router.push({ path: '/add-address' })
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
      height: 98px;
      padding: 0 32px;
      background: #fff;
      line-height: 98px;
      color: #333;
      font-size: 34px;
      .icon {
        display: inline-block;
        width: 30px;
        height: 20px;
        background: url('~@/assets/images/ic-right@2x.png') no-repeat center;
        background-size: 100%;
      }
      &.oldAddress {
        margin-bottom: 20px;
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
