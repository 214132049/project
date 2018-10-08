<template>
  <div class="shop-item_component">
    <img :src="shopInfo.restaurantImgUrl" alt="图片" class="left">
    <div class="right">
      <div class="shop-name-status">
        <span class="name">{{ shopInfo.restaurantName }}</span>
        <span class="status" :class="{ open: shopInfo.isClose == 0 }">
          {{ shopInfo.isClose == 0 ? '正常' : '暂停' }}营业
        </span>
      </div>
      <div class="rate-count">
        <star :value="shopInfo.score" style="display: inline-block"/>
        <span class="count">月售{{ shopInfo.monthCount || 0 }}单</span>
      </div>
      <div class="recommend-box">
        <p class="title">推荐菜品</p>
        <scroll scroll-x :scroll-y="false">
          <ul class="shop-products">
            <li v-for="(product, index) in 5" :key="index" class="product">
              <img src="@/assets/images/img@2x.png" alt="">
            </li>
          </ul>
        </scroll>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopItem',
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
    width: 100%;
    .left {
      display: block;
      width: 184px;
      height: 138px;
      margin-right: 40px;
    }
    .right {
      flex: 1;
      overflow: hidden;
    }
    .shop-name-status {
      display: flex;
      justify-content: space-between;
      color: #353535;
      font-size: 36px;
      line-height: 36px;
      .status {
        color: #c2c2c2;
        font-size: 22px;
        &.open {
          color: #444;
        }
      }
    }
    .rate-count {
      margin-top: 20px;
      height: 30px;
      line-height: 30px;
      .count {
        color: #333;
        margin-left: 20px;
        font-size: 24px;
      }
    }
    .recommend-box {
      margin-top: 20px;
      .title {
        font-size: 22px;
        padding: 8px 0;
        color: @color;
        border-bottom: 1px solid @border-color; /* no */
      }
      .shop-products {
        padding-top: 10px;
        white-space: nowrap;
        display: inline-block;
        li {
          display: inline-block;
          margin-right: 20px;
          width: 128px;
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
