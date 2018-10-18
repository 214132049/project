<template>
  <div class="dispatch-food-info">
    <div class="shop-name">
      <img class="logo" :src="info.restaurantImgUrl" />
      {{ info.restaurantName }}
    </div>
    <ul class="food-list">
      <li class="food-item" v-for="(food, index) in foods" :key="index">
        <img :src="food.dishesImgUrl" alt="" class="img">
        <span class="name">{{ food.dishesName }}</span>
        <span class="count">×{{ food.number }}</span>
        <span class="price">￥{{ food.dishesPrice }}</span>
      </li>
      <li class="dispatch-price" v-if="info.status && info.status != 1 || info.isPack == 1">
        {{ ordering ? '配送费' : '打包配送' }}
        <span class="price">{{ info.isPack == 1 ? `￥${info.packAmount}` : '否'}}</span>
      </li>
      <li class="total-price">
        <cu-button size="small" type="primary" v-if="info.state && info.state != 99" @click="orderAgain">再来一单</cu-button>
        <div class="price-box">
          <span>合计</span>
          <span class="price">￥{{ totalPrice }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'DispatchFoodInfo',
  props: {
    info: {
      type: Object,
      default: () => {}
    },
    ordering: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    foods() {
      return this.info.orderDetails || []
    },
    totalPrice() {
      let totalPrice = 0
      for(let key in this.foods) {
        let { dishesPrice, number } = this.foods[key]
        totalPrice += dishesPrice * number
      }
      return (totalPrice + (this.info.isPack ? (+this.info.packAmount || 0) : 0)).toFixed(2)
    }
  },
  watch: {
    totalPrice: {
      handler(value) {
        this.$emit('getPrice', value)
      },
      immediate: true
    }
  },
  methods: {
    orderAgain() {
      let {
        restaurantId,
        breakfastBookStartTime,
        breakfastBookEndTime,
        lunchBookStartTime,
        lunchBookEndTime,
        dinnerBookStartTime,
        dinnerBookEndTime
      } = this.info
      let bookTimes = {
        1: [new Date(breakfastBookStartTime).getTime, new Date(breakfastBookEndTime).getTime],
        2: [new Date(lunchBookStartTime).getTime, new Date(lunchBookEndTime).getTime],
        3: [new Date(dinnerBookStartTime).getTime, new Date(dinnerBookEndTime).getTime]
      }
      this.$store.dispatch('setBookTimes', bookTimes)
      this.$router.replace({ path: '/shop', query: { id: restaurantId } })
    }
  }
}
</script>
<style lang="less" scoped>
.dispatch-food-info {
  background: #fff;
  .shop-name {
    height: 98px;
    line-height: 98px;
    color: #999;
    font-size: 34px;
    padding-left: 32px;
    border-bottom: 1px solid @border-color; /* no */
    .logo {
      width: 38px;
      height: 38px;
      margin-right: 20px;
      vertical-align: middle;
    }
  }
  .food-list {
    padding: 0 32px;
    .food-item {
      height: 98px;
      line-height: 98px;
      .img {
        width: 48px;
        height: 48px;
        vertical-align: sub;
      }
      .name {
        margin: 0 10px 0 20px;
        font-size: 34px;
        color: #333;
      }
      .count {
        font-size: 28px;
        color: #999;
      }
    }
    .price {
      float: right;
      color: #333;
      font-size: 36px;
    }
    .dispatch-price {
      height: 80px;
      line-height: 80px;
      border-top: 1px solid @border-color; /* no */
    }
    .total-price {
      height: 98px;
      line-height: 98px;
      border-top: 1px solid @border-color; /* no */
      .price-box {
        float: right;
        color: #999;
        font-size: 30px;
        .price {
          color: #FF7859;
          font-size: 36px;
        }
      }
    }
  }
}
</style>
