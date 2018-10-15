import Vue from 'vue'

export const addFood = (state, data) => {
  let food = state.selectFoods[data.detailId];
  if (food) {
    food.number++;
  } else {
    Vue.set(state.selectFoods, `${data.detailId}`, {
      ...data,
      number: 1,
      dishesPrice: +data.dishesPrice
    });
  }
}

export const decreaseFood = (state, data) => {
  let food = state.selectFoods[data.detailId];
  food.number--;
  if (food.number == 0) {
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
}