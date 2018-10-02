<template>
  <div class="cartcontrol">
    <template v-if="showCount">
      <div class="cart-btn cart-decrease" v-show="food.count > 0" @click.stop.prevent="decreaseCart"></div>
      <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
    </template>
    <div class="cart-btn cart-add" @click.stop.prevent="addCart" :class="{ disabled: disabled }"></div>
  </div>
</template>

<script>
export default {
  name: 'CartControl',
  props: {
    food: {
      type: Object,
      default: () => {}
    },
    showCount: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addCart() {
      this.$store.dispatch('addFood', this.food)
    },
    decreaseCart() {
      this.$store.dispatch('decreaseFood', this.food)
    }
  }
};
</script>

<style lang="less" scoped>
.cartcontrol {
  font-size: 0;
  display: flex;
  align-items: center;
  div {                      
    &.cart-count {
      flex: 1;
      text-align: center;
      font-size: 30px;
      color: #333;
      vertical-align: middle;
    }
    &.cart-btn {
      width: 40px;
      height: 40px;
      background-image: url('~@/assets/images/ic-add-nor@2x.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      &.cart-add {
        background-image: url('~@/assets/images/ic-add-nor@2x.png');
        &.disabled {
          background-image: url('~@/assets/images/ic-add-dis@2x.png');
        }
      }
      &.cart-decrease {
        background-image: url('~@/assets/images/ic-decrease@2x.png');
      }  
    }
  }
}    
</style>
