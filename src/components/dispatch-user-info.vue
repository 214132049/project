<template>
  <div class="dispatch-user-info">
    <div class="user-info">
      <template v-if="info.needDispatch">
        <p class="name">
          2号楼5层手术科室
          <i class="icon" v-if="showIcon"></i>
        </p>
        <p class="address">
          <span class="user-name">王晓敏</span>
          <span>（手术科室）</span>
          <span class="tel">123456799544</span>
        </p>
      </template>
      <template v-else>
        <p class="name">
          王晓敏
          <span class="tel">123456799544</span>
        </p>
        <p class="address">
          <span>手术科室</span>
        </p>
      </template>
    </div>
    <div class="time-box">
      <span>{{ info.needDispatch ? '取' : '用' }}餐时间</span>
      <span class="time">17:30-18:30</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DispatchUserInfo',
  props: {
    info: {
      type: Object,
      default: () => {}
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.dispatch-user-info {
  background: #fff;
  .user-info {
    padding: 32px 30px;
    .name {
      font-size:34px;
      color: #333;
      .icon {
        float: right;
        width: 14px;
        height: 26px;
        background: url('~@/assets/images/order-ic-right@2x.png') no-repeat center;
        background-size: 100%;
      }
    }
    .address {
      color: #999;
      margin-top: 20px;
      font-size: 30px;
      .user-name {
        color: #333;
      }
    }
    .tel {
      margin-left: 20px;
    }
  }
  .time-box {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    height: 98px;
    line-height: 98px;
    font-size: 34px;
    color: #333;
    border-top: 1px solid @border-color; /* no */
    .time {
      color: #38C7C4;
      font-size: 30px;
    }
  }
}
</style>
