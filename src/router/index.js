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
    component: Login,
    meta: {
      pageTitle: '登录'
    }
  },
  {
    path: "/home",
    component: Home,
    meta: {
      pageTitle: '订餐'
    }
  },
  {
    path: "/shop",
    component: Shop,
    meta: {
      pageTitle: '订餐'
    }
  },
  {
    path: "/food",
    component: Food,
    meta: {
      pageTitle: '详情'
    }
  },
  {
    path: "/confirm",
    component: ConfirmOrder,
    meta: {
      pageTitle: '确认订单'
    }
  },
  {
    path: "/select-address",
    component: SelectAddress,
    meta: {
      pageTitle: '配送地址'
    }
  },
  {
    path: "/add-address",
    component: AddAddress,
    meta: {
      pageTitle: '配送地址'
    }
  },
  {
    path: "/orders",
    component: Orders,
    meta: {
      pageTitle: '订单'
    }
  },
  {
    path: "/order-detail",
    component: OrderDetail,
    meta: {
      pageTitle: '订单'
    }
  },
  {
    path: "/cancel-order",
    component: CancelOrder,
    meta: {
      pageTitle: '取消订单'
    }
  },
  {
    path: "/score",
    component: Score,
    meta: {
      pageTitle: '评价'
    }
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