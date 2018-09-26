import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import Server from './server'

const FastClick = require('fastclick')
const viewportUnitsBuggyfill = require('viewport-units-buggyfill')
const viewportUnitsBuggyfillHacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')

Vue.config.productionTip = false
Vue.prototype.$http = Server
FastClick.attach(document.body)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})

viewportUnitsBuggyfill.init({
  hacks: viewportUnitsBuggyfillHacks
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
