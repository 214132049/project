const Home = () => import('@/pages/Home.vue')
const Order = () => import('@/pages/Order.vue')
const Shop = () => import('@/pages/Shop.vue')

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