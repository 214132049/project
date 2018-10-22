<template>
  <scroll>
    <div class="order-detail-page">
      <!-- 订单正常 1:完成 99:已生成 00:取消 -->  
      <template v-if="orderInfo.state == 99">
        <div class="qrcode-box">
          <img class="qrcode" :src="orderInfo.qrCodeUrl"/>
          <div class="code">{{ orderInfo.orderNo }}</div>
          <div class="tag" v-if="!orderInfo.isPack">序号：11</div>
        </div>
        <dispatch-user-info :info="orderInfo" class="mb20"></dispatch-user-info>
      </template>

      <!-- 订单取消\完成 -->
      <template v-else>
        <div class="orderStatus">订单已{{ {'1': '完成', '00': '取消'}[orderInfo.state] }}</div>
      </template>

      <dispatch-food-info :info="orderInfo"></dispatch-food-info>
      
      <!-- 订单正常 -->
      <template v-if="orderInfo.state == 99">
        <!-- 订单需要配送 -->
        <div class="dispatch" v-if="orderInfo.isPack == 1">
          <span>打包配送</span>
          <span class="right">{{ orderInfo.isPack == 1 ? '是' : '否' }}</span>
        </div>
        <div class="btn-box">
          <cu-button class="btn" type="cancel" @click="cancelOrder">取消</cu-button>
          <cu-button class="btn" type="primary" @click="finishOrder">完成</cu-button>
        </div>
      </template>

      <template v-else>
        <div class="order-no-time">
          <div class="title">订单信息</div>
          <div class="no">
            <span class="label">订单号</span>
            {{ orderInfo.orderNo }}
          </div>
          <div class="time">
            <span class="label">订单时间</span>
            {{ orderInfo.createDate }}
          </div>
        </div>
        <div class="address-box" v-if="orderInfo.state == 1">
          <div class="address" v-if="orderInfo.isPack == 1">
            <span class="label">配送地址</span>
            <span>{{ orderInfo.address }}</span>
          </div>
          <cu-button class="btn" size="large" type="primary" :disabled="!!orderInfo.restaurantScore">
            {{ !!orderInfo.restaurantScore ? '已' : '去' }}评价
          </cu-button>
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
        isPack: false,
        status: 2,
        disabled: true
      }
    }
  },
  mounted() {
    this.$loading.show()
    this.$api.getOrderById({
      id: this.$route.query.orderId
    }).then(({ data }) => {
      this.$loading.hide()
      this.orderInfo = data
    })
  },
  methods: {
    cancelOrder () {
      this.$router.replace({ path: '/cancel-order', query: { id: this.orderInfo.id } })
    },
    finishOrder() {
      this.$api.finishOrder({
        orderId: this.$route.query.orderId
      }).then(() => {
        this.$toast('确认订单成功', () => {
          this.$router.back()
        })
      })
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
