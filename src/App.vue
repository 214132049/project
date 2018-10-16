<template>
  <div id="app">
    <keep-alive :include="includePage">
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
      includePage: ['HomePage', 'ConfirmOrderPage']
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
    },
    '$route' (route) {
      this.setPateTitle(route.meta.pageTitle)
    }
  },
  methods: {
    setPateTitle(title) {
      document.title = title
      if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        var $body = document.body
        var $iframe = document.createElement('iframe')
        $iframe.src = require('../public/cover.png')
        $iframe.style.display = 'none'
        var callback = function() {
          setTimeout(function () {
            $iframe.removeEventListener('load', callback)
            $body.removeChild($iframe)
          }, 0)
        }
        $iframe.addEventListener('load', callback)
        $body.appendChild($iframe)
      }
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
