import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const Store = {
  state: {
    selectFoods: []
  },
  mutations,
  actions,
  getters
}

export default new Vuex.Store(Store)