import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/Authorization/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import(/* webpackChunkName: "About" */ '@/views/About.vue')
    }
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "Error" */ '@/views/Error.vue'),
  
  },
]

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: '/',
  routes
})

router.beforeEach((to, _from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.userToken) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
