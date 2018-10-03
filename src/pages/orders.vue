<template>
  <scroll class="wrapper">
    <ul class="order-list-page">
      <li class="order-item" v-for="(item, index) in orders" :key="index" @click="goDetail(item.id)">
        <div class="info-box">
          <img :src="item.restaurantImgUrl" alt="" class="logo">
          <div class="content">
            <div class="name-status-time">
              <p class="name-status">
                <span class="name">{{ item.restaurantName }}</span>
                <span class="status">{{ item.status }}</span>
              </p>
              <p class="time"><i class="icon-clock"></i>{{ item.date }}</p>
            </div>
            <div class="foods">
              <span class="name">{{ item.orderDest }}</span>
              <span class="price">￥{{ item.totalAmount }}</span>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <cu-button size="small" @click.stop.prevent="assess">去评价</cu-button>
        </div>
      </li>
    </ul>
  </scroll>
</template>
<script>
export default {
  name: 'Orders',
  data() {
    return {
      orders: []
    }
  },
  activated() {
    this.getOrders()
  },
  methods: {
    getOrders() {
      this.$api.getOrderList({
        state: 1,
        pageStart: 1,
        pageSize: 10
      }).then(({data}) => {
        this.orders = this.orders.concat(data)
      }) 
    },
    goDetail(id) {
      this.$router.push({ path: '/order-detail', query: { id } })
    },
    assess() {
      this.$router.push({ path: '/evaluate', query: { id: 1 } })
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  background: #f5f5f5;
}
.order-list-page {
  padding-bottom: 150px;
  .order-item {
    margin-bottom: 20px;
    padding: 0 32px;
    background: #fff;
    .info-box {
      display: flex;
      .logo {
        width: 58px;
        height: 58px;
        margin-right: 18px;
        margin-top: 30px;
        border: 1px solid #f3f6f9; /* no */
      }
      .content {
        flex: 1;
        .name-status-time {
          padding: 24px 0;
          .name-status {
            display: flex;
            justify-content: space-between;
            .name {
              font-size:34px;
              color: #333;
            }
            .status {
              font-size: 28px;
              color: #38C7C4;
            }
          }
          .time {
            font-size: 22px;
            color: #999;
            margin-top: 20px;
            .icon-clock {
              display: inline-block;
              width: 22px;
              height: 22px;
              background: url('~@/assets/images/ic-watch@2x.png') no-repeat center;
              background-size: 100%;
              margin-right: 12px;
            }
          }
        }
        .foods {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid @border-color ; /* no */
          color: #333;
          height: 98px;
          line-height: 98px;
          font-size: 30px;
          .price {
            font-size: 36px;
          }
        }
      }
    }
    .btn-box {
      padding: 28px 0;
      text-align: right;
      border-top: 1px solid @border-color ; /* no */
    }
  }
}
</style>

