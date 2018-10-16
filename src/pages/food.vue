<template>
  <div class="food-page">
    <img :src="food.dishesImgUrl" alt="">
    <div class="content">
      <div class="food-name-count">
        <p class="name">{{ food.dishesName }}</p>
        <p class="count">月售{{ food.monthCount }}份</p>
      </div>
      <div class="price-box">
        <div class="price">￥{{ food.dishesPrice }}</div>
        <cart-control :food="food" :num="num"></cart-control>
      </div>
      <div class="desc">
        <p>简介：</p>
        <p>{{ food.desc }}</p>
      </div>
      <div class="materials" v-if="food.materials">
        <p>材料：</p>
        <p>{{ food.materials }}</p>
      </div>
    </div>
    <div class="back-icon" @click="$router.back()"></div>
  </div>
</template>
<script>
export default {
  name: 'FoodPage',
  data () {
    return {
      food: {
        number: 0
      },
      num: 0
    }
  },
  mounted() {
    this.getDetail()
  },
  methods: {
    getDetail() {
      this.$loading.show()
      let id = this.$route.query.id
      let food = this.$store.state.selectFoods[id]
      this.$api.getOrderMealDetail({
        id,
        restaurantSetupId: this.$store.state.shopInfo.id,
      }).then(({data}) => {
        this.food = data
        this.food.detailId = id
        this.food.number = food ? food.number : 0
        this.num = food ? food.number : 0
        this.$loading.hide()
      })
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
