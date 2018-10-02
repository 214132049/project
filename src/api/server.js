import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

const vm = new Vue()

var instance = axios.create({
  baseURL: process.env.VUE_APP_HOSTURL,
  timeout: 3600 * 1000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  withCredentials: false
});

instance.interceptors.request.use(function (config) {
  config.data = config.data || {}
  if (config.url.indexOf('login') == -1) {
    config.data.token = window.sessionStorage.getItem("token") || "";
  }
  config.method = 'POST'
  config.data = qs.stringify(config.data)
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  if (response.data.code === 0) {
    return Promise.resolve(response.data)
  }
  vm.$toast(response.data.message)
  return Promise.reject(response)
}, function (error) {
  return Promise.reject(error)
})

export default instance