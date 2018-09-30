<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count > 0" @click.stop.prevent="decreaseCart"></div>
    <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    <div class="cart-add" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
export default {
  name: 'CartControl',
  props: {
    food: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    // console.log(this.food)
  },
  methods: {
    addCart(event) {
      if (!event._constructed) {
        return;
      }
      if (!this.food.count) {
        this('food', "count", 1);
      } else {
        this.food.count++;
      }
      this.$emit("add", event.target);
    },
    decreaseCart(event) {
      if (!event._constructed) {
        return;
      }
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.cartcontrol {
  font-size: 0;
  div {
    display: inline-block;
    &.cart-decrease {
      padding: 6px;
    }                          
    &.cart-count {
      vertical-align: top;
      width: 12px;
      padding-top: 6px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
      color: rgb(147, 153, 159);
    }
    &.cart-add {
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
      background: url() no-repeat center;
    }
  }
}    
</style>
