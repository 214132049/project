<template>
  <div class="evaluate-page">
    <div class="service">
      <div class="header">
        <div class="shop">
          <img src="@/assets/images/logo.png" alt="" class="logo" />
          餐厅A
        </div>
        <div class="radio">
          <i class="icon" :class="{ anonymous: anonymous }" @click="anonymous = !anonymous"></i>
          匿名评价
        </div>
      </div>
      <part-title>为服务打分</part-title>
      <star v-model="servicePoints" size="large" class="star"></star>
    </div>
    <div class="food">
      <div class="header">
        <div class="food-name">
          <img src="@/assets/images/img_03.png" alt="" class="img">锅包肉
        </div>
      </div>
      <part-title>为菜品打分</part-title>
      <star v-model="foodPoints" size="large" class="star"></star>
    </div>
    <div class="btn-box">
      <div>
        <cu-button size="large" type="primary" @click="submit">提交评价</cu-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Evaluate',
  data() {
    return {
      anonymous: false,
      servicePoints: 0,
      foodPoints: 0
    }
  },
  methods: {
    submit() {}
  }
}
</script>

<style lang="less" scoped>
.evaluate-page {
  .header {
    height: 98px;
    line-height: 98px;
    color: #333;
    font-size: 34px;
    display: flex;
    justify-content: space-between;
    .shop {
      .logo {
        width: 38px;
        height: 38px;
        margin-right: 10px;
        vertical-align: middle;
      }
    }
    .radio {
      font-size: 28px;
      display: flex;
      align-items: center;
      .icon {
        display: inline-block;
        width: 34px;
        height: 34px;
        margin-right: 16px;
        background-image: url('~@/assets/images/oder-btn-nor@2x.png');
        background-repeat:  no-repeat;
        background-position: center;
        background-size: 100%;
        vertical-align: middle;
        &.anonymous {
          background-image: url('~@/assets/images/oder-btn-sel@2x.png');
        }
      }
    }
    .img {
      width: 48px;
      height: 48px;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
  .star {
    display: inline-block;
    margin: 42px 0 66px;
  }
  .service, .food {
    background: #fff;
    padding: 0 32px;
    text-align: center;
  }
  .service {
    margin-bottom: 20px;
  }
  .food {
    .header {
      justify-content: center;
    }
  }
  .btn-box {
    background: #fff;
    padding: 0 32px;
    &>div {
      padding: 28px 0;
      border-top: 1px solid @border-color; /* no */
    }
  }
}
</style>
