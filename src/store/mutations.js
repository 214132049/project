export const addFoods = (state, data) => {
  state.selectFoods.push(data)
}
export const clearFoods = (state) => {
  state.selectFoods = []
}