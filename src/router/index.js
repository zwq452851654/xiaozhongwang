import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: "Home",
    // component: Home,
		component: resolve => require(['@/views/home/index'], resolve),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/home/setOftenNav',
    name: "SetOftenNav",
    // component: () => import('../views/home/setOftenNav.vue'),
		component: resolve => require(['@/views/home/setOftenNav'], resolve),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/levae',
    name: 'Levae',
    // component: () => import('../views/levae/index.vue'),
		component: resolve => require(['@/views/levae/index'], resolve),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/learn',
    name: 'Learn',
    // component: () => import('../views/learn/index.vue'),
		component: resolve => require(['@/views/learn/index'], resolve),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/learn/courseInfo',
    name: 'CourseInfo',
    // component: () => import('../views/learn/courseInfo.vue'),
		component: resolve => require(['@/views/learn/courseInfo'], resolve),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/brief',
    name: 'brief',
    // component: () => import('../views/brief/index.vue'),
		component: resolve => require(['@/views/brief/index'], resolve),
    meta: {
      keepAlive: true
    }
  },
	{
	  path: '/message',
	  name: 'Message',
	  // component: () => import('../views/message/index.vue'),
		component: resolve => require(['@/views/message/index'], resolve),
		meta: {
		  keepAlive: true
		}
	},
  {
    path: '/user/login',
    name: 'Login',
    // component: () => import('../views/user/login.vue'),
		component: resolve => require(['@/views/user/login'], resolve),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/timeAxis',
    name: 'timeAxis',
    // component: () => import('../views/timeAxis.vue'),
		component: resolve => require(['@/views/timeAxis'], resolve),
    meta: {
      keepAlive: true
    }
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
