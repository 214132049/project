<template>
  <scroll class="wrapper" :data="data" :pullup="pullup" @scrollToEnd="loadData" ref="scroll">
    <section class="page home-page">
      <img src="@/assets/images/banner@2x.png" class="banner" alt="banner">
      <part-title>院内餐厅</part-title>
      <ul class="shop-list">
        <router-link  tag="li" v-for="(item, index) in data" :key="index" :to="{ path: '/shop' }" class="item">
          <shop-item :shop-info="item"></shop-item>
        </router-link>
      </ul>
      <div class="loading-wrapper"></div>
    </section>
  </scroll>
</template>
<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        data: [],
        pullup: true
      }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      loadData() {
        this.$loading.show()
        this.$refs.scroll.disable()
        setTimeout(() => {
          this.data = this.data.concat(new Array(10).fill({}))
          this.$refs.scroll.enable()
          this.$loading.hide()
        }, 1000)
      }
    }
  }
</script>
<style lang="less" scoped>
  .wrapper {
    height: 100%;
  }
  .home-page {
    padding-bottom: 80px;
    .banner {
      display: block;
      width: 100%;
    }
    .shop-list {
      width: 686px;
      margin: 0 auto;
      .item {
        margin: 20px 0 40px 0;
      }
    }
  }
</style>
