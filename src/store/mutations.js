export const setSelectFoods = (state, data) => {
  if (Array.isArray(data)) {
    state.selectFoods = data
    return
  }
  let foods = state.selectFoods
  let food = foods.find(v => v.detailId == data.detailId)
  if (food) {
    food.number = data.number
  } else if (data.number > 0) {
    state.selectFoods.push(data)
  }
}

export const clearFood = (state) => {
  state.selectFoods = []
}

export const setAddress = (state, data) => {
  state.address = data
}

export const setUserInfo = (state, data) => {
  state.userInfo = data
}

export const setBookTimes = (state, data) => {
  state.bookTimes = data
}

export const setShopInfo = (state, data) => {
  state.shopInfo = data
}

export const setDay = (state, data) => {
  state.day = data
}

export const setTime = (state, data) => {
  state.time = data
}

export const initState = (state) => {
  state.shopInfo = {}
}