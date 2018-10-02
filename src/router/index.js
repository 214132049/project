import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')
const Order = () => import(/* webpackChunkName: "order" */ '@/pages/order.vue')
const Shop = () => import(/* webpackChunkName: "shop" */ '@/pages/shop.vue')
const Food = () => import(/* webpackChunkName: "shop" */ '@/pages/food.vue')

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/shop",
    component: Shop
  },
  {
    path: "/food",
    component: Food
  },
  {
    path: "/order",
    component: Order
  },
  {
    path: "*",
    redirect: "/home"
  }
];

export default new VueRouter({
  mode: 'hash',
  routes
})