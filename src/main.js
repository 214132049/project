const FastClick = require('fastclick')
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import Server from './server'

Vue.config.productionTip = false
Vue.prototype.$http = Server
FastClick.attach(document.body)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
