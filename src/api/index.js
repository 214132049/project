import server from './server'

// 登录
const login = (data) => {
  return server({
    url: 'api/h5/security/login',
    data
  })
}

// 获取餐厅列表
const getShopList = () => {
  return server({
    url: '/api/h5/order/getRestaurantList'
  })
}

// 获取订单列表
const getOrderList = () => {
  return server({
    url: 'api/h5/order/getUserOrderList'
  })
}

// 取消订单
const cancelOrder = () => {
  return server({
    url: "api/h5/order/cancelOrder"
  });
};

// 评分
const scoreOrder = () => {
  return server({
    url: "api/h5/order/sorceOrder"
  });
};

export default {
  login,
  getShopList,
  getOrderList,
  cancelOrder,
  scoreOrder
}
