<template>
  <div id="app">
    <router-view></router-view>
    <nav-bar v-if="showNarBar"></nav-bar>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
   'nav-bar': Navbar
  },
  computed: {
    showNarBar() {
      return ['/', '/home', '/order'].indexOf(this.$route.path) > -1
    }
  }
}
</script>

<style lang="less">
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
