import axios from 'axios'

var instance = axios.create({
  baseURL: process.env.VUE_APP_HOSTURL,
  timeout: 3600 * 1000,
  headers: {},
  withCredentials: true
})
instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default instance