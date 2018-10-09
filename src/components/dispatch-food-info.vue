<template>
  <div class="dispatch-food-info">
    <div class="shop-name">
      <img class="logo" src="@/assets/images/logo.png" />
      {{ shopInfo.restaurantName }}
    </div>
    <ul class="food-list">
      <li class="food-item" v-for="(food, index) in foods" :key="index">
        <img :src="food.icon" alt="" class="img">
        <span class="name">{{ food.name }}</span>
        <span class="count">×{{ food.count }}</span>
        <span class="price">￥{{ food.price }}</span>
      </li>
      <li class="dispatch-price" v-if="info.status && info.status != 1 || needDispatch">
        {{ info.status ? '打包配送' : '配送费' }}
        <span class="price">{{ needDispatch ? `￥6` : '否'}}</span>
      </li>
      <li class="total-price">
        <cu-button v-show="showBtn" size="small" type="primary" v-if="info.status && info.status != 1" @click="orderAgain">再来一单</cu-button>
        <div class="price-box">
          <span>合计</span>
          <span class="price">￥{{ totalPrice }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DispatchFoodInfo',
  props: {
    needDispatch: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      foods: this.$store.state.selectFoods,
      showBtn: true,
      info: {}
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      for(let key in this.foods) {
        let { price, count } = this.foods[key]
        totalPrice += price * count
      }
      return totalPrice + (this.needDispatch ? 6 : 0)
    },
    ...mapGetters({
      shopInfo: 'getShopInfo'
    })
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
      this.$api.orderAgain()
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
