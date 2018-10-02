<template>
  <div class="food-page">
    <img src="@/assets/images/img@2x.png" alt="">
    <div class="content">
      <div class="food-name-count">
        <p class="name">醋溜土豆丝</p>
        <p class="count">月售298份</p>
      </div>
      <div class="price-box">
        <div class="price">￥18</div>
        <cart-control :food="food" show-count></cart-control>
      </div>
      <div class="desc">
        <p>简介：</p>
        <p>马铃薯又称土豆。吃起来又麻又辣微酸的土豆丝，清脆又开胃，非常适合炎热没胃口的夏天第一次吃的人一定猜不出是马铃薯做的材料。</p>
      </div>
      <div class="materials">
        <p>材料：</p>
        <p>马铃薯又称土豆。吃起来又麻又辣微酸的土豆丝，</p>
      </div>
    </div>
    <div class="back-icon"></div>
  </div>
</template>
<script>
export default {
  name: 'Food',
  data () {
    return {
      food: {}
    }
  }
}
</script>

<style lang="less" scoped>
.food-page {
  img {
    display: block;
    width: 100%;
  }
  .content {
    padding: 0 32px;
  }
  .food-name-count {
    padding: 36px 0;
    .name {
      font-size: 36px;
      font-weight: 400;
      color: #353535;
    }
    .count {
      font-size: 22px;
      font-weight: 300;
      color: #999;
      margin-top: 16px;
    }
  }
  .price-box {
    display: flex;
    justify-content: space-between;
    .price {
      font-size: 36px;
      font-weight: 500;
      color: #FF7859;
    }
  }
  .desc, .materials {
    font-size: 30px;
    line-height: 46px;
    color: #333;
    font-weight: 300;
  }
  .desc {
    margin: 70px 0 36px 0;
  }
  .back-icon {
    position: fixed;
    top: 32px;
    right: 32px;
    width: 52px;
    height: 52px;
    background: url('~@/assets/images/ic-close@2x.png') no-repeat center;
    background-size: 100%;
  }
}
</style>
