<template>
  <div class="cancel-order-page">
    <div class="success-tip">
      <h5>
        <i class="icon"></i>
        订单已成功取消
      </h5>
      <p>订单已取消，请告诉我们原因，以帮助我们改进产品和服务</p>
    </div>
    <ul class="reason-list">
      <li v-for="(reason, key) in reasons" :key="key" @click="selectReason(key)" class="reason-item">
        <span>{{ reason }}</span>
        <i class="icon" v-show="currentKey == key"></i>
      </li>
    </ul>
    <div class="btn">
      <cu-button size="large" type="primary" @click="cancelOrder">提交</cu-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CancelOrder',
  data() {
    return {
      reasons: {1: '点错菜了，重新点', 2: '临时有变化', 3: '我不想订了', 4: '其他'},
      currentKey: -1
    }
  },
  methods: {
    selectReason(key) {
      this.currentKey = key
    },
    cancelOrder() {
      if (this.currentKey == -1) {
        return this.$toast('请选择原因在提交')
      }
      this.$api.cancelOrder({
        cancelReason: this.currentKey,
        orderId: this.$route.query.id
      })
    }
  }
}
</script>

<style lang="less" scoped>
.cancel-order-page {
  .success-tip {
    padding: 34px;
    h5 {
      font-size: 42px;
      font-weight: 500;
      color: #000;
      .icon {
        display: inline-block;
        width: 48px;
        height: 48px;
        background: url('~@/assets/images/ic-finish@2x.png') no-repeat center;
        background-size: 100%;
        margin-right: 20px;
        vertical-align: sub;
      }
    }
    p {
      font-size:30px;
      color:#999;
      line-height:38px;
      margin-top: 35px;
    }
  }
  .reason-list{
    .reason-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      height: 98px;
      line-height: 98px;
      padding: 0 32px;
      background: #fff;
      color: #333;
      font-size: 34px;
      .icon {
        display: inline-block;
        width: 30px;
        height: 20px;
        background: url('~@/assets/images/ic-right@2x.png') no-repeat center;
        background-size: 100%;
      }
      &:last-child {
        border-bottom: 1px solid @border-color; /* no */
      }
      &:active {
        background: #f2f2f2;
      }
      -webkit-tap-highlight-color: #f2f2f2;
    }
  }
  .btn {
    padding: 28px 32px;
    background: #fff;
  }
}
</style>
