import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')
const Orders = () => import(/* webpackChunkName: "order" */ '@/pages/orders.vue')
const Shop = () => import(/* webpackChunkName: "shop" */ '@/pages/shop.vue')
const Food = () => import(/* webpackChunkName: "shop" */ '@/pages/food.vue')
const OrderDetail = () => import(/* webpackChunkName: "order" */ '@/pages/order-detail.vue')
const CancelOrder = () => import(/* webpackChunkName: "order" */ '@/pages/cancel-order.vue')
const Evaluate = () => import(/* webpackChunkName: "order" */ '@/pages/evaluate.vue')

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
    path: "/orders",
    component: Orders
  },
  {
    path: "/order-detail",
    component: OrderDetail
  },
  {
    path: "/cancel-order",
    component: CancelOrder
  },
  {
    path: "/evaluate",
    component: Evaluate
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