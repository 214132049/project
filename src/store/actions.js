export const addFood = ({ commit }, data) => {
  commit('addFood', data)
}

export const decreaseFood = ({ commit }, data) => {
  commit('decreaseFood', data)
}

export const clearFood = ({ commit }) => {
  commit('clearFood')
}