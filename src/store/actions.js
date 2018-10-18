export const setSelectFoods = ({ commit }, data) => {
  commit('setSelectFoods', data)
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

export const setBookTimes = ({ commit }, data) => {
  commit('setBookTimes', data)
}

export const setDay = ({ commit }, data) => {
  commit('setDay', data)
}

export const setTime = ({ commit }, data) => {
  commit('setTime', data)
}

export const clearDayAndTime = ({ commit }) => {
  commit('setTime', '')
  commit('setDay', '')
}

export const initState = ({ commit }) => {
  commit('initState')
  commit('clearFood')
}