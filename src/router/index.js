import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/du',
    name: 'Du',
    component: () => import('../views/dujitang.vue'),
    meta:{
      keepAlive: false
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
