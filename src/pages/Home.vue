<template>
  <section class="page home-page">
    <scroll class="wrapper" :data="data" :pulldown="pulldown" @pulldown="loadData">
      <img src="@/assets/images/banner@2x.png" class="banner" alt="banner">
      <part-title>院内餐厅</part-title>
      <ul class="content">
        <router-link  tag="li" v-for="(item, index) in data" :key="index" :to="{ path: '/shop' }">
          go to shop
        </router-link>
      </ul>
      <div class="loading-wrapper"></div>
    </scroll>
  </section>
</template>
<script>
  import scroll from '@/components/Scroll'
  import PartTitle from '@/components/PartTitle'

  export default {
    name: 'HomePage',
    components: {
      scroll,
      PartTitle
    },
    data() {
      return {
        data: [1],
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
  }
</style>
