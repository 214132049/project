import server from './server'

const login = (data) => {
  return server({
    url: 'api/h5/security/login',
    method: 'POST',
    data
  })
}

const getOrderList = () => {
  return server({
    url: 'api/h5/order/getUserOrderList'
  })
}

export default {
  login,
  getOrderList
};