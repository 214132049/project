import Vue from 'vue'
import router from './router'
import store from './store'
import server from './server'
import UI from './components'
import App from './App.vue'

const FastClick = require('fastclick')
const viewportUnitsBuggyfill = require('viewport-units-buggyfill')
const viewportUnitsBuggyfillHacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks')

Vue.config.productionTip = false
Vue.prototype.$http = server
Vue.use(UI)

FastClick.attach(document.body)
viewportUnitsBuggyfill.init({
  hacks: viewportUnitsBuggyfillHacks
});

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
