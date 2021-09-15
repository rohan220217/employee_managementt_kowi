import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import task from './modules/task'
import home from './modules/home'
import extra from './modules/extra'
import notifications from './modules/notifications'
import notepad from './modules/notepad'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notepad,
    notifications,
    extra,
    home,
    task,
    user,

  }
})
