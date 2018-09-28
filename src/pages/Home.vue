<template>
  <scroll class="wrapper" :data="data" :pullup="pullup" @scrollToEnd="loadData" ref="scroll">
    <div class="page home-page">
      <img src="@/assets/images/banner@2x.png" class="banner" alt="banner">
      <part-title>院内餐厅</part-title>
      <ul class="shop-list">
        <router-link  tag="li" v-for="(item, index) in data" :key="index" :to="{ path: '/shop' }" class="item">
          <shop-item :shop-info="item"></shop-item>
        </router-link>
      </ul>
      <div class="loading-tips">
        <transition name="fade" mode="out-in">
          <span v-show="loading && data.length > 0 && !all">加载中...</span>
        </transition>
        <span v-if="all">没有更多了</span>
      </div>
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
    mounted() {
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
        setTimeout(() => {
          this.data = this.data.concat(new Array(10).fill({}))
          this.loading = false
          if (this.data.length > 20) {
            this.all = true
          }
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
    padding-bottom: 120px;
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
    .loading-tips {
      text-align: center;
      height: 40px;
      font-size: 32px;
      color: #2c2c2c;
      .fade-enter-active, .fade-leave-active {
        animation: fade 1s infinite; 
      }
      .fade-enter, .fade-leave-to {
        animation: none;
      }
      @keyframes fade {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  }
</style>
