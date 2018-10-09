import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import(/* webpackChunkName: "home" */ '@/pages/login.vue')
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
    redirect: "/login"
  },
  {
    path: "/login",
    component: Login
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
    redirect: "/login"
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !window.sessionStorage.getItem('token')) {
    return next('/login')
  }
  next()
})

export default router