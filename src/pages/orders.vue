<template>
  <scroll class="wrapper">
    <ul class="order-list">
      <li class="order-item" v-for="(item, index) in orders" :key="index">
        <div class="info-box">
          <img src="" alt="" class="logo">
          <div class="content">
            <div class="name-status-time">
              <p class="name-status">
                <span class="name">餐厅A</span>
                <span class="status">已下单</span>
              </p>
              <p class="time">
                <i class="icon-clock"></i>
                2018-8-18 12:12
              </p>
            </div>
            <div class="foods">
              <span class="name">锅包肉等3件商品</span>
              <span class="price">￥42</span>
            </div>
          </div>
        </div>
        <div class="btn-box">
          <cu-button size="small">去评价</cu-button>
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
      orders: 8
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  background: #f5f5f5;
}
.order-list {
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

