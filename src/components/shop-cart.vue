<template>
  <div class="shop-cart">
    <div class="bottom-content">
      <div class="content-left">
        <div class="icon-shopping_cart" @click="toggleList">
          <div class="badge" v-show="totalCount > 0">{{ totalCount }}</div>
        </div>
        <div class="price">￥{{ totalPrice }}</div>
      </div>
      <div class="pay" :class="{ disabled: !canPay }" @click="pay">去订餐</div>
    </div>
    <transition name="fold">
      <div class="shopcart-list" v-show="listShow" @click="listShow = false">
        <div class="list-wrap" @click.stop.prevent="listShow = true">
          <div class="list-header">
            <span class="empty" @click.stop.prevent="empty">
              <i class="icon"></i>清空
            </span>                
          </div>
          <div class="list-content">
            <scroll class="food-list_wrap" :data="foods" ref="scroll">
              <ul>
                <li class="food" v-for="(food, key) in foods" :key="key">
                  <span class="name">{{ food.dishesName }}</span>
                  <span class="price">￥{{ food.dishesPrice }}</span>
                  <cart-control class="cartcontrol-wrapper" :food="food"></cart-control>
                </li>
              </ul>
            </scroll>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShopCart',
  props: {
    minPrice: {
      type: Number,
      default: 0
    },
    selectFoods: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      listShow: false
    }
  },
  computed: {
    foods() {
      return this.selectFoods.filter(v => v.number > 0)
    },
    totalPrice() {
      let total = 0;
      Object.keys(this.foods).forEach(id => {
        let food = this.foods[id]
        total += food.dishesPrice * food.number
      })
      return total == 0 ? total : total.toFixed(2)
    },
    totalCount() {
      let count = 0;
      Object.keys(this.foods).forEach(id => {
        let food = this.foods[id]
        count += food.number
      })
      return count;
    },
    canPay() {
      return this.totalPrice <= this.minPrice || this.totalCount == 0 ? false : true
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
      if (!this.canPay) {
        return;
      }
      this.$router.push({ path: '/confirm' })
    },
    empty() {
      this.selectFoods.forEach(food => {
        food.number = 0
      })
    },
    toggleList() {
      if (!this.totalCount > 0) {
        return;
      }
      this.listShow = !this.listShow
      if (this.listShow) {
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      }
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
        opacity: 0.3;
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
      width: 100%;
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
          vertical-align: text-top;
        }
      }
    }
    .list-content {
      // max-height: 500px;
      height: 500px;
      background: #fff;
      .food-list_wrap {
        overflow: hidden;
      }
      .food {
        display: flex;
        height: 125px;
        padding: 0 32px;
        box-sizing: border-box;
        align-items: center;
        line-height: 125px;
        border-bottom: 1px solid @border-color; /* no */
        .name {
          flex: 1;
          display: inline-block;
          font-size:32px;
          font-weight:400;
          color: #333;
        }
        .price {
          font-size: 36px;
          font-weight: 500;
          color: #FF7859;
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
