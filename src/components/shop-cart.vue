<template>
  <div class="shop-cart">
    <div class="bottom-content">
      <div class="content-left">
        <div class="icon-shopping_cart" @click="toggleList">
          <div class="badge" v-show="totalCount > 0">{{ totalCount }}</div>
        </div>
        <div class="price">￥{{ totalPrice }}</div>
      </div>
      <div class="pay" :class="{ disabled: canPay }" @click="pay">去订餐</div>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-wrap">
          <div class="list-header">
            <span class="empty" @click="empty">
              <i class="icon"></i>清空
            </span>                
          </div>
          <scroll class="list-content">
            <ul>
              <li class="food" v-for="(food, key) in selectFoods" :key="key">
                <span class="name">{{ food.name }}</span>
                <span class="price">￥{{ food.price }}</span>
                <cart-control class="cartcontrol-wrapper" show-count :food="food"></cart-control>
              </li>
            </ul>
          </scroll>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'ShopCart',
  props: {
    minPrice: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      listShow: false
    }
  },
  computed: {
    ...mapState([
      'selectFoods'
    ]),
    totalPrice() {
      let total = 0;
      Object.keys(this.selectFoods).forEach(id => {
        let food = this.selectFoods[id]
        total += food.price * food.count
      })
      return total      
    },
    totalCount() {
      let count = 0;
      Object.keys(this.selectFoods).forEach(id => {
        let food = this.selectFoods[id]
        count += food.count
      })
      return count;
    },
    canPay() {
      return !this.totalPrice > this.minPrice ? true : false
    }
  },
  watch: {
    totalCount (value) {
      if (value == 0) {
        this.listShow = false
      }
    }
  },
  methods: {
    pay() {
      if (this.totalPrice < this.minPrice) {
        return;
      }
      this.$router.push({ path: '/confirm' })
    },
    empty() {
      this.$store.dispatch('clearFood')
    },
    toggleList() {
      if (!this.totalCount > 0) {
        return;
      }
      this.listShow = !this.listShow;
    }
  }
};
</script>
<style lang="less" scoped>
.shop-cart {
  .bottom-content {
    position: relative;
    display: flex;
    height: 98px;
    line-height: 98px;
    background: #fff;
    z-index: 2;
    .content-left {
      flex: 1;
      .icon-shopping_cart {
        position: absolute;
        top: -34px;
        width: 98px;
        height: 98px;
        border-radius: 50%;
        margin-left: 34px;
        background: url("~@/assets/images/ic-buy@2x.png") no-repeat center;
        background-size: 100%;
        .badge {
          position: absolute;
          top: 0;
          right: 0;
          width: 36px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          border-radius: 50%;
          font-size: 26px;
          font-weight: 400;
          color: #fff;
          background: #F12C20;
        }
      }
      .price {
        padding-left: 164px;
        font-size: 36px;
        font-weight: 500;
        color: #FF7859;
      }
    }
    .pay {
      width: 214px;
      height: 98px;
      line-height: 98px;
      text-align: center;
      font-size: 36px;
      font-weight: 500;
      background: #38C7C4;
      color: #fff;
      &.disabled {
        background: #888;
      }
    }
  }
  .shopcart-list {
    position:  fixed;
    left: 0;
    bottom: 98px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    .list-wrap {
      position: absolute;
      bottom: 0;
    }
    .list-header {
      height: 74px;
      line-height: 74px;
      padding: 0 32px;
      background: #F3F6F9;
      .title {
        float: left;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .empty {
        float: right;
        font-size: 30px;
        color: #999;
        font-weight: 300;
        .icon {
          display: inline-block;
          width: 32px;
          height: 34px;
          margin-right: 14px;
          background: url('~@/assets/images/ic-delete@2x.png') no-repeat center;
          background-size: 100%;
          vertical-align: middle;
        }
      }
    }
    .list-content {
      max-height: 500px;
      overflow: hidden;
      background: #fff;
      .food {
        display: flex;
        height: 125px;
        padding: 0 32px;
        box-sizing: border-box;
        align-items: center;
        line-height: 125px;
        border-bottom: 1px solid @border-color; /* no */
        .name {
          display: inline-block;
          width: 160px;
          font-size:32px;
          font-weight:400;
          color: #333;
        }
        .price {
          font-size: 36px;
          font-weight: 500;
          color: #FF7859;
          margin-left: 234px;
          margin-right: 50px;
        }
        .cartcontrol-wrapper {
          width: 144px;
        }
      }
    }
  }
}
</style>
