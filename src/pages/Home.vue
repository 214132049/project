<template>
  <scroll class="wrapper" :data="data" :pullup="pullup" @scrollToEnd="loadData" ref="scroll">
    <div class="page home-page">
      <img src="@/assets/images/banner@2x.png" class="banner" alt="banner">
      <part-title>院内餐厅</part-title>
      <ul class="shop-list">
        <li v-for="(item, index) in data" :key="index" @click="goDetail(item)" class="item">
          <shop-item :shop-info="item"></shop-item>
        </li>
      </ul>
      <load-more :show-end="all" :show-loading="loading && data.length > 0 && !all"></load-more>
    </div>
  </scroll>
</template>
<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        data: [],
        pullup: true,
        loading: false,
        all: false
      }
    },
    activated () {
      this.loadData()
    },
    watch: {
      loading(val) {
        if (val) {
          this.$refs.scroll.disable()
        } else {
          this.$refs.scroll.enable()
        }
      }
    },
    methods: {
      loadData() {
        if (this.all) {
          return
        }
        this.loading = true
        this.$api.getShopList().then(({ data }) => {
          this.data = this.data.concat(data)
          this.loading = false
          if (data.length < 5) {
            this.all = true
          }
        })
      },
      goDetail(shop) {
        if (shop.restaurantId !== this.$store.state.shopInfo.restaurantId) {
          this.$store.dispatch('initState')
        }
        this.$store.dispatch('setShopInfo', {
          restaurantName: shop.restaurantName,
          isClose: shop.isClose,
          monthCount: shop.monthCount,
          score: shop.score,
          restaurantId: shop.restaurantId
        })
        this.$router.push({ path: '/shop' })
      }
    }  
  }
</script>
<style lang="less" scoped>
  .wrapper {
    height: 100%;
  }
  .home-page {
    padding-bottom: 120px;
    background: #fff;
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
