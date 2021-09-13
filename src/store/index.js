import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import task from './modules/task'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    task,
    user,

  }
})
