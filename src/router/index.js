import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name:"Home",
    component: Home,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/soup',
    name: 'Soup',
    component: () => import('../views/soup/index.vue'),
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/blog/index.vue'),
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/levae',
    name: 'Levae',
    component: () => import('../views/levae/index.vue'),
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('../views/learn/index.vue'),
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/learn/courseInfo',
    name: 'CourseInfo',
    component: () => import('../views/learn/courseInfo.vue'),
    meta:{
      keepAlive: true
    }
  },
  {
    path: '/shared',
    name: 'Shared',
    component: () => import('../views/shared/index.vue'),
    meta:{
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes
})

export default router
