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
  let getTime = function(prop, obj) {
    let date = obj[prop] ? obj[prop].replace(/-/g, '/') : ''
    return date ? new Date(date).Format('hh:mm') : ''
  }

  export default {
    name: 'HomePage',
    data() {
      return {
        data: []
      }
    },
    mounted () {
      this.$store.dispatch('clearDayAndTime')
      this.$store.dispatch('initState')
      this.loadData()
    },
    methods: {
      loadData() {
        this.$loading.show()
        this.$api.getShopList().then(({ data }) => {
          this.data = data.sort((a, b) => a.isClose > b.isClose)
          this.$loading.hide()
        })
      },
      goDetail(shop) {
        let {
          restaurantName,
          id,
          restaurantImgUrl,
          restaurantId,
          packAmount,
          releaseTypeHairStr: takeTime
        } = shop
        this.$store.dispatch('setShopInfo', {
          restaurantName,
          id,
          restaurantImgUrl,
          restaurantId,
          packAmount,
          takeTime
        })
        let bookTimes = {
          1: [getTime('breakfastBookStartTime', shop), getTime('breakfastBookEndTime', shop)],
          2: [getTime('lunchBookStartTime', shop), getTime('lunchBookEndTime', shop)],
          3: [getTime('dinnerBookStartTime', shop), getTime('dinnerBookEndTime', shop)]
        }
        this.$store.dispatch('setBookTimes', bookTimes)
        this.$router.push({ path: '/shop', query: { id: shop.id } })
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
