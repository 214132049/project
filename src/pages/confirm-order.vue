<template>
  <div class="confirm-order-page">
    <div class="user-info-box">
      <div class="tag">{{ !orderInfo.needDispatch ? '用餐人信息' : '订单配送至' }}</div>
      <dispatch-user-info :info="orderInfo"></dispatch-user-info>
    </div>
    <dispatch-food-info :info="orderInfo"></dispatch-food-info>
    <div class="dispatch">
      <span>打包配送</span>
      <i class="icon"
        :class="{ 'need-dispatch': orderInfo.needDispatch }"
        @click="orderInfo.needDispatch = !orderInfo.needDispatch"></i>
    </div>
    <div class="confirm-box">
      <div class="total-price">合计<span class="price">￥36</span></div>
      <div class="confirm-btn" @click="confirm">确认</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfirmOrder',
  data() {
    return {
      orderInfo: {
        needDispatch: false,
      }
    }
  },
  
  methods: {
    cancelOrder () {
      this.$router.push({ path: '/cancel-order', query: { id: 1 } })
    },
    confirm() {}
  }
}
</script>

<style lang="less" scoped>
.confirm-order-page {
  .user-info-box {
    background: #fff;
    margin-bottom: 20px;
    padding-top: 20px;
    .tag {
      width: 152px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      background:rgba(234,255,255,1);
      border-radius:0px 21px 21px 0px;
      font-size: 24px;
      color: #38C7C4;
    }
  }
  .dispatch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 98px;
    line-height: 98px;
    padding: 0 32px;
    margin-top: 20px;
    background: #fff;
    color: #333;
    font-size: 34px;
    .icon {
      display: inline-block;
      width: 46px;
      height: 46px;
      background-image: url('~@/assets/images/oder-btn-nor@2x.png');
      background-repeat:  no-repeat;
      background-position: center;
      background-size: 100%;
      &.need-dispatch {
        background-image: url('~@/assets/images/oder-btn-sel@2x.png');
      }
    }
  }
  .confirm-box {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 98px;
    line-height: 98px;
    background: #fff;
    .total-price {
      flex: 1;
      padding-left: 32px;
      color: #999;
      font-size: 30px;
      .price {
        font-size: 36px;
        color: #FF7859;
        margin-left: 18px;
      }
    }
    .confirm-btn {
      width: 214px;
      font-size: 36px;
      font-weight: 500;
      color: #fff;
      background: #38C7C4;
      text-align: center;
    }
  }
}
</style>

