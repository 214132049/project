import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

let state = {
  userInfo: {},
  shopInfo: {},
  selectFoods: [],
  bookTimes: {},
  address: '',
  time: '',
  day: ''
}
const sessionState = window.sessionStorage.getItem('state')

// 刷新使用存储的
if (sessionState) {
  state = JSON.parse(sessionState)
}

const Store = {
  state,
  mutations,
  actions,
  getters
}

export default new Vuex.Store(Store)