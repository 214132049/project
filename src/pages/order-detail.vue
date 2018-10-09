<template>
  <scroll>
    <div class="order-detail-page">
      <!-- 订单正常 -->
      <template v-if="orderInfo.status == 1">
        <div class="qrcode-box">
          <img class="qrcode" />
          <div class="code">20171108A001</div>
          <div class="tag" v-if="!orderInfo.needDispatch">序号：11</div>
        </div>
        <dispatch-user-info :info="orderInfo" class="mb20"></dispatch-user-info>
      </template>

      <!-- 订单取消\完成 -->
      <template v-else>
        <div class="orderStatus">订单已{{ orderInfo.status == 2 ? '完成' : '取消' }}</div>
      </template>

      <dispatch-food-info :info="orderInfo"></dispatch-food-info>
      
      <!-- 订单正常 -->
      <template v-if="orderInfo.status == 1">
        <!-- 订单需要配送 -->
        <div class="dispatch" v-if="orderInfo.needDispatch">
          <span>打包配送</span>
          <span class="right">是</span>
        </div>
        <div class="btn-box">
          <cu-button class="btn" type="cancel" @click="cancelOrder">取消</cu-button>
          <cu-button class="btn" type="primary">完成</cu-button>
        </div>
      </template>

      <template v-if="orderInfo.status != 1">
        <div class="order-no-time">
          <div class="title">订单信息</div>
          <div class="no">
            <span class="label">订单号</span>
            1111 2222 3333 4444 55
          </div>
          <div class="time">
            <span class="label">订单时间</span>
            2018-11-11  23:08
          </div>
        </div>
        <div class="address-box" v-if="orderInfo.status == 2">
          <div class="address" v-if="orderInfo.needDispatch">
            <span class="label">配送地址</span>
            <span>2号楼5层手术科室</span>
          </div>
          <cu-button class="btn" size="large" type="primary" :disabled="orderInfo.disabled">已评价</cu-button>
        </div>
      </template>
    </div>
  </scroll>
</template>
<script>
export default {
  name: 'OrderDetail',
  data() {
    return {
      orderInfo: {
        needDispatch: false,
        status: 2,
        disabled: true
      }
    }
  },
  activated() {
    this.$api.getOrderById({
      id: this.$route.query.orderId
    }).then(() => {
      // this.orderInfo = data
    })
  },
  methods: {
    cancelOrder () {
      this.$router.push({ path: '/cancel-order', query: { id: 1 } })
    }
  }
}
</script>

<style lang="less" scoped>
.order-detail-page {
  .qrcode-box {
    position: relative;
    height: 504px;
    padding-top: 60px;
    text-align: center;
    background: #fff;
    margin-bottom: 20px;
    .qrcode {
      width: 322px;
      height: 322px;
    }
    .code {
      height: 120px;
      line-height: 120px;
      font-size: 36px;
      color: #040000;
    }
    .tag {
      position: absolute;
      top: 20px;
      left: 0;
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
  .orderStatus {
    color: #999;
    font-size: 42px;
    font-weight: 500;
    padding: 52px 0 36px 32px;
  }
  .mb20 {
    margin-bottom: 20px;
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
    .right {
      font-size: 30px;
    }
  }
  .btn-box {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    padding: 32px;
    background: #fff;
    .btn {
      margin-left: 40px;
    }
  }
  .order-no-time {
    padding: 0 32px;
    background: #fff;
    margin-top: 20px;
    &>div {
      height: 98px;
      line-height: 98px;
    }
    .title {
      color: #333;
      font-size: 34px;
      border-bottom: 1px solid @border-color; /* no */
    }
    .no, .time {
      color: #999;
      font-size: 30px;
    }
    .label {
      display: inline-block;
      width: 120px;
      color: #333;
      margin-right: 18px;
    }
  }
  .address-box {
    padding: 0 32px;
    margin-top: 20px;
    background: #fff;
    .address {
      display: flex;
      align-content: center;
      justify-content: space-between;
      height: 98px;
      line-height: 98px;
      color: #999;
      font-size: 30px;
      border-bottom: 1px solid @border-color; /* no */
      .label {
        width: 120px;
        color: #333;
      }
    }
    .btn {
      margin: 28px 0;
    }
  }
}
</style>
