const Home = () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue')
const Order = () => import(/* webpackChunkName: "order" */ '@/pages/Order.vue')
const Shop = () => import(/* webpackChunkName: "shop" */ '@/pages/Shop.vue')

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