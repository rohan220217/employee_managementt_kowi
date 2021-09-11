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
    path: '/notifications',
    name: 'Notifications',
    component: function () {
      return import(/* webpackChunkName: "Notifications" */ '@/views/Notifications/Notifications.vue')
    }
  },
 
  {
    path: '/tasks',
    name: 'Tasks',
    component: function () {
      return import(/* webpackChunkName: "Tasks" */ '@/views/Tasks/Tasks.vue')
    }
  },
  {
    path: '/collaborators',
    name: 'Collaborators',
    component: function () {
      return import(/* webpackChunkName: "Collaborators" */ '@/views/Collaborators/Collaborators.vue')
    }
  },
  {
    path: '/notepad',
    name: 'Notepad',
    component: function () {
      return import(/* webpackChunkName: "Notepad" */ '@/views/Notepad/Notepad.vue')
    }
  },
  {
    path: '/add_task',
    name: 'AddTask',
    component: function () {
      return import(/* webpackChunkName: "AddTask" */ '@/views/AddTask/AddTask.vue')
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
