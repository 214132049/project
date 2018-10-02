<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar v-if="showNarBar"></tab-bar>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showNarBar() {
      return ['/', '/home', '/orders'].indexOf(this.$route.path) > -1
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
}
img {
  content: normal !important;
}
</style>
