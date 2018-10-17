<template>
  <div class="cartcontrol">
    <div class="cart-btn cart-decrease" v-show="number > 0" @click.stop.prevent="decreaseCart"></div>
    <div class="cart-count" v-show="number > 0">{{ number }}</div>
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      number: 0
    }
  },
  watch: {
    food: {
      handler (value) {
        this.number = value.number
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    addCart() {
      if (this.disabled) return
      this.number += 1
      this.food.number += 1
    },
    decreaseCart() {
      this.number -= 1
      this.food.number -= 1
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
      padding: 0 15px;
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
