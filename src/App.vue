<template>
  <div id="app">
    <keep-alive :exclude="excludePage">
      <router-view></router-view>
    </keep-alive>
    <tab-bar v-if="showNarBar"></tab-bar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      excludePage: ['Score']
    }
  },
  computed: {
    showNarBar() {
      return ['/', '/home', '/orders'].indexOf(this.$route.path) > -1
    }
  },
  watch: {
    '$store.state': {
      handler (value) {
        window.sessionStorage.setItem('state', JSON.stringify(value))
      },
      deep: true
    }
  }
}
</script>

<style lang="less">
@import "./assets/styles/reset.css";

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;
  color: #333;
  background: #f3f6f9;
}
img {
  content: normal !important;
}
</style>
