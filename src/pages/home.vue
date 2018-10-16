<template>
  <scroll class="wrapper">
    <div class="page home-page">
      <img src="@/assets/images/banner@2x.png" class="banner" alt="banner">
      <part-title>院内餐厅</part-title>
      <ul class="shop-list">
        <li v-for="(item, index) in data" :key="index" @click="goDetail(item)" class="item">
          <shop-item :shop-info="item"></shop-item>
        </li>
      </ul>
    </div>
  </scroll>
</template>
<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        data: []
      }
    },
    mounted () {
      this.loadData()
    },
    methods: {
      loadData() {
        this.$api.getShopList().then(({ data }) => {
          this.data = this.data.concat(data)
        })
      },
      goDetail(shop) {
        if (shop.id !== this.$store.state.shopInfo.id) {
          this.$store.dispatch('initState')
        }
        this.$store.dispatch('setShopInfo', {
          restaurantName: shop.restaurantName,
          isClose: shop.isClose,
          monthCount: shop.monthCount,
          score: shop.score,
          id: shop.id,
          restaurantImgUrl: shop.restaurantImgUrl,
          restaurantId: shop.restaurantId,
          packAmount: shop.packAmount
        })
        this.$router.push({ path: '/shop' })
      }
    }  
  }
</script>
<style lang="less" scoped>
  .wrapper {
    height: 100%;
    background: #fff;
  }
  .home-page {
    padding-bottom: 120px;
    .banner {
      display: block;
      width: 100%;
    }
    .shop-list {
      width: 686px;
      margin: 0 auto;
      border-top: 1px solid #e5e5e5; /* no */
      .item {
        margin: 20px 0 40px 0;
      }
    }
  }
</style>
