import Vue from 'vue'

export const addFood = (state, data) => {
  let food = state.selectFoods[data.id];
  if (food) {
    food.count++;
  } else {
    Vue.set(state.selectFoods, `${data.id}`, { ...data, count: 1 });
  }
}

export const decreaseFood = (state, data) => {
  let food = state.selectFoods[data.id];
  food.count--;
  if (food.count == 0) {
    Vue.delete(state.selectFoods, `${data.id}`);
  }
}

export const clearFood = (state) => {
  state.selectFoods = {}
}

export const setAddress = (state, data) => {
  state.address = data
}