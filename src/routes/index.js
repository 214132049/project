const HelloWorld = () => import('@/pages/HelloWorld.vue')

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes