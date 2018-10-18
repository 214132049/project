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
    return obj[prop] ? new Date(obj[prop]).Format('hh:mm') : ''
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
          this.data = this.data.concat(data)
          this.$loading.hide()
        })
      },
      goDetail(shop) {
        let {
          restaurantName,
          isClose,
          monthCount,
          score,
          id,
          restaurantImgUrl,
          restaurantId,
          packAmount,
          releaseTypeHairStr,
          breakfastBookStartTime,
          breakfastBookEndTime,
          lunchBookStartTime,
          lunchBookEndTime,
          dinnerBookStartTime,
          dinnerBookEndTime
        } = shop
        this.$store.dispatch('setShopInfo', {
          restaurantName,
          isClose,
          monthCount,
          score,
          id,
          restaurantImgUrl,
          restaurantId,
          packAmount,
          releaseTypeHairStr
        })
        let bookTimes = {
          1: [new Date(breakfastBookStartTime).Format('hh:mm'), new Date(breakfastBookEndTime).Format('hh:mm')],
          2: [new Date(lunchBookStartTime).Format('hh:mm'), new Date(lunchBookEndTime).Format('hh:mm')],
          3: [new Date(dinnerBookStartTime).Format('hh:mm'), new Date(dinnerBookEndTime).Format('hh:mm')]
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
