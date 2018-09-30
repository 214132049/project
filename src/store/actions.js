export const addFoods = ({ commit, data }) => {
  commit('selectFoods', data)
}

export const clearFoods = ({ commit }) => {
  commit('clearFoods')
}