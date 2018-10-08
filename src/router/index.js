import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')
const Orders = () => import(/* webpackChunkName: "order" */ '@/pages/orders.vue')
const Shop = () => import(/* webpackChunkName: "shop" */ '@/pages/shop.vue')
const Food = () => import(/* webpackChunkName: "shop" */ '@/pages/food.vue')
const OrderDetail = () => import(/* webpackChunkName: "order" */ '@/pages/order-detail.vue')
const CancelOrder = () => import(/* webpackChunkName: "order" */ '@/pages/cancel-order.vue')
const Score = () => import(/* webpackChunkName: "evaluate" */ '@/pages/score.vue')
const ConfirmOrder = () => import(/* webpackChunkName: "confirm" */ '@/pages/confirm-order.vue')
const SelectAddress = () => import(/* webpackChunkName: "confirm" */ '@/pages/select-address.vue')
const AddAddress = () => import(/* webpackChunkName: "confirm" */ '@/pages/add-address.vue')

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
    path: "/confirm",
    component: ConfirmOrder
  },
  {
    path: "/select-address",
    component: SelectAddress
  },
  {
    path: "/add-address",
    component: AddAddress
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
    path: "/score",
    component: Score
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