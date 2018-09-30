<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="icon-shopping_cart" @click="toggleList">
          <div class="badge" v-show="totalCount>0">{{ totalCount }}</div>
        </div>
        <div class="price">￥{{ totalPrice }}</div>
      </div>
      <div class="pay" :class="{ disabled: canPay }" @click="pay">去订餐</div>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="empty">清空</span>                
        </div>
        <scroll class="list-content">
          <ul>
            <li class="food" v-for="food in selectFoods" :key="food.name">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>￥{{food.price*food.count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
            </li>
          </ul>
        </scroll>
      </div>
    </transition>
    <transition name="fade">
      <div class="list-mask" @click="listShow = false"  v-show="listShow"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 10,
            count: 1
          }
        ];
      }
    },
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
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach(food => {
        count += food.count;
      });
      return count;
    },
    canPay() {
      return !this.totalPrice > this.minPrice ? true : false
    }
  },
  methods: {
    pay() {
      if (this.totalPrice < this.minPrice) {
        return;
      }
    },
    empty() {
      this.selectFoods.forEach(food => {
        food.count = 0;
      });
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
.shopcart {
  width: 100%;
  height: 90px;
  .content {
    display: flex;
    height: 98px;
    line-height: 98px;
    background: #fff;
    .content-left {
      flex: 1;
      .icon-shopping_cart {
        position: relative;
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
          width: 24px;
          height: 16px;
          line-height: 16px;
          text-align: center;
          border-radius: 16px;
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          background: rgb(240, 20, 20);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }
      }
      .price {
        padding-right: 12px;
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
        background: #ccc;
      }
    }
  }
  .shopcart-list {
    position:  absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    transform: translate3d(0, -100%, 0);
    &.fold-enter-active, &.fold-leave-active {
      transition: all 0.5s;
    }
    &.fold-enter, &.fold-leave-active {
      transform: translate3d(0, 0, 0);
    }
    .list-header {
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .title {
        float: left;
        font-size: 14px;
        color: rgb(7, 17, 27);
      }
      .empty {
        float: right;
        font-size: 12px;
        color: rgb(0, 160, 220);
      }
    }
    .list-content {
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      .food {
        position: relative;
        padding: 12px 0;
        box-sizing: border-box;
        border: 1px solid rgba(7, 17, 27, 0.1);
        .name {
          line-height: 24px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .price {
          position: absolute;
          right: 90px;
          bottom: 12px;
          line-height: 24px;
          font-size: 14px;
          font-weight: 700;
          color: rgb(240, 20, 20);
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 6px;
        }
      }
    }
  }
  .list-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 40;
    backdrop-filter: blur(10px);
    opacity: 1;
    background: rgba(7, 17, 27, 0.6);
    &.fade-enter-active, &.fade-leave-active {
      transition: all 0.5s;
    }
    &.fade-enter, &.fade-leave-active {
      opacity: 0;
      background: rgba(7, 17, 27, 0);
    }
  }
}
</style>
