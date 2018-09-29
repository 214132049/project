import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const Store = {
  state: {
    count: 0
  },
  mutations,
  actions
}

export default new Vuex.Store(Store)