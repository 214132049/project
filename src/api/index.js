import server from './server'

// 登录
const login = data => server({ url: 'api/h5/security/login', data })

// 获取餐厅列表
const getShopList = () => server({ url: 'api/h5/order/getRestaurantList' })

// 获取菜品
const getMealList = data => server({ url: 'api/h5/order/getOrderMealList', data })

// 获取菜品详情
const getOrderMealDetail = data => server({ url: 'api/h5/order/getOrderMealDetail', data })

// 下单
const orderFood = data => server({ url: 'api/h5/order/orderFood', data })

// 再次下单
const orderAgain = data => server({ url: 'api/h5/order/orderAgain', data })

// 完成下单
const finishOrder = data => server({ url: 'api/h5/order/finishOrder', data })

// 获取订单列表
const getOrderList = data => server({ url: 'api/h5/order/getUserOrderList', data })

// 获取订单详情
const getOrderById = data => server({ url: 'api/h5/order/getOrderById', data })

// 取消订单
const cancelOrder = data => server({ url: 'api/h5/order/cancelOrder', data })

// 评分
const scoreOrder = data => server({ url: 'api/h5/order/sorceOrder', data })

export default {
  login,
  getShopList,
  getOrderList,
  cancelOrder,
  scoreOrder,
  getOrderById,
  getMealList,
  orderFood,
  orderAgain,
  finishOrder,
  getOrderMealDetail
}
