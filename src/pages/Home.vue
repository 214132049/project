<template>
  <section class="page home-page">
    <scroll class="wrapper" :data="data" :pulldown="pulldown" @pulldown="loadData">
      <img src="@/assets/images/banner@2x.png" class="banner" alt="banner">
      <part-title>院内餐厅</part-title>
      <ul class="shop-list">
        <router-link  tag="li" v-for="(item, index) in data" :key="index" :to="{ path: '/shop' }" class="item">
          <shop-item :shop-info="item"></shop-item>
        </router-link>
      </ul>
      <div class="loading-wrapper"></div>
    </scroll>
  </section>
</template>
<script>
  import scroll from '@/components/Scroll'
  import PartTitle from '@/components/PartTitle'
  import ShopItem from '@/components/ShopItem'

  export default {
    name: 'HomePage',
    components: {
      scroll,
      PartTitle,
      ShopItem
    },
    data() {
      return {
        data: [{}],
        pulldown: true
      }
    },
    created() {
      this.loadData()
    },
    methods: {
      loadData() {
        this.$http().then((res) => {
          this.data = res.data.concat(this.data)
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .home-page {
    .banner {
      display: block;
      width: 100%;
    }
    .shop-list {
      width: 686px;
      margin: 0 auto;
      .item {
        padding: 20px 0;
      }
    }
  }
</style>
