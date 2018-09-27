<template>
  <div class="shop-item_component">
    <img src="" alt="">
    <div>
      <div class="shop-info">
        <p class="shop-name-status">
          <span class="name">餐厅一</span>
          <span class="status">正常营业</span>
        </p>
        <rate :value="3" />
      </div>
      <ul class="shop-products">
        <li v-for="(product, index) in products" :key="index">
          <img src="" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Rate from './Rate'

export default {
  name: 'ShopItem',
  components: {
    Rate
  },
  props: {
    shopInfo: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
<style lang="less" scoped>
  .shop-item_component{
    display: flex;
    .shop-info {
      .shop-name-status {
        display: flex;
        justify-content: space-between;
        .status {
          color: @color;
        }
      }
    }
    .shop-products {
      padding-top: 10px;
      border-top: 1px solid @border-color; /* no */
      li {
        display: inline-block;
        margin-right: 15px;
      }
    }
  }
</style>
