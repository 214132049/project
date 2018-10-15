import Vue from 'vue'

export const addFood = (state, data) => {
  let food = state.selectFoods[data.detailId];
  if (food) {
    food.count++;
  } else {
    Vue.set(state.selectFoods, `${data.detailId}`, { ...data, count: 1 });
  }
}

export const decreaseFood = (state, data) => {
  let food = state.selectFoods[data.detailId];
  food.count--;
  if (food.count == 0) {
    Vue.delete(state.selectFoods, `${data.detailId}`);
  }
}

export const clearFood = (state) => {
  state.selectFoods = {}
}

export const setAddress = (state, data) => {
  state.address = data
}

export const setUserInfo = (state, data) => {
  state.userInfo = data
}

export const setShopInfo = (state, data) => {
  state.shopInfo = data
}

export const initState = (state) => {
  state.shopInfo = {}
  state.address = ''
}