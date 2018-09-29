const Home = () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')
const Order = () => import(/* webpackChunkName: "order" */ '@/pages/order.vue')
const Shop = () => import(/* webpackChunkName: "shop" */ '@/pages/shop.vue')

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
    path: "/order",
    component: Order
  },
  {
    path: "*",
    redirect: "/home"
  }
];

export default routes