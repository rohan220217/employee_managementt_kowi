import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/Authorization/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: function () {
      return import(/* webpackChunkName: "Notifications" */ '@/views/Notifications/Notifications.vue')
    }, 
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/tasks',
    name: 'Tasks',
    component: function () {
      return import(/* webpackChunkName: "Tasks" */ '@/views/Tasks/Tasks.vue')
    }, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: function () {
      return import(/* webpackChunkName: "Collaborators" */ '@/views/Review/Reviews.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/review/:id',
    name: 'ReviewDetail',
    props: true,
    component: function () {
      return import(/* webpackChunkName: "Collaborators" */ '@/views/Review/ReviewDetail.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/notepad',
    name: 'Notepad',
    component: function () {
      return import(/* webpackChunkName: "Notepad" */ '@/views/Notepad/Notepad.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add_task',
    name: 'AddTask',
    component: function () {
      return import(/* webpackChunkName: "AddTask" */ '@/views/AddTask/AddTask.vue')
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/task/:id',
    name: 'task_id',
    component: () => import(/* webpackChunkName: "task_id" */ '@/views/Task/Task.vue'),
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "SignUp" */ '@/views/SignUp/SignUp.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "Profile" */ '@/views/Profile/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/spotify',
    name: 'Spotify',
    component: () => import(/* webpackChunkName: "Spotify" */ '@/views/Spotify/Spotify.vue'),
    meta: {
      requiresAuth: true
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
      next('/login')
    }
  } else {
    next()
  }
})

export default router
