import axios from 'axios'

var instance = axios.create({
  baseURL: process.env.VUE_APP_HOSTURL,
  timeout: 3600 * 1000,
  headers: {},
  withCredentials: true
})
instance.interceptors.request.use(function (config) {
  config.token = window.sessionStorage.getItem("token") || "";
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  if (response.data.code === 0) {
    return Promise.resolve(response.data)
  }
  return Promise.reject(response.data.message)
}, function (error) {
  return Promise.reject(error)
})

export default instance