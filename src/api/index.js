import server from './server'

const login = (data) => {
  return server({
    url: 'api/h5/security/login',
    data
  })
}

const getShopList = () => {
  return server({
    url: '/api/h5/order/getRestaurantList'
  })
}

const getOrderList = () => {
  return server({
    url: 'api/h5/order/getUserOrderList'
  })
}

export default {
  login,
  getShopList,
  getOrderList
};