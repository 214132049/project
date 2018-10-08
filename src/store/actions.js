export const addFood = ({ commit }, data) => {
  commit('addFood', data)
}

export const decreaseFood = ({ commit }, data) => {
  commit('decreaseFood', data)
}

export const clearFood = ({ commit }) => {
  commit('clearFood')
}

export const setAddress = ({ commit }, data) => {
  commit('setAddress', data)
}

export const setUserInfo = ({ commit }, data) => {
  commit('setUserInfo', data)
}

export const setShopInfo = ({ commit }, data) => {
  commit('setShopInfo', data)
}