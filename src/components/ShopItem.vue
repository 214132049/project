<template>
  <div class="shop-item_component">
    <img src="@/assets/images/img@2x.png" alt="图片" class="left">
    <div class="right">
      <div class="shop-name-status">
        <span class="name">餐厅一</span>
        <span class="status">正常营业</span>
      </div>
      <div class="rate-count">
        <rate :value="3" style="display: inline-block"/>
        <span class="count">月售2836单</span>
      </div>
      <div class="recommend-box">
        <p class="title">推荐菜品</p>
        <ul class="shop-products">
          <li v-for="(product, index) in products" :key="index">
            <img src="" alt="">
          </li>
        </ul>
      </div>
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
    .left {
      display: block;
      width: 184px;
      margin-right: 40px;
    }
    .shop-name-status {
      display: flex;
      justify-content: space-between;
      .status {
        color: @color;
      }
    }
    .count {
      color: @color;
    }
    .title {
      padding: 5px 0;
      border-top: 1px solid @border-color; /* no */
    }
    .shop-products {
      padding-top: 10px;
      li {
        display: inline-block;
        width: 128px;
        margin-right: 20px;
      }
    }
  }
</style>
