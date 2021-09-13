import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Dayjs
import dayjs from 'dayjs'
Vue.prototype.dayjs = dayjs

// Loading spinner
import { LoadingPlugin } from 'vuetify-loading-overlay'
Vue.use(LoadingPlugin, {
  // props
  spinnerProps: {
    color: "#ff5a5a"
  },
  overlayProps: {
  }
})

// Toasted Plugin
import Toasted from 'vue-toasted'
Vue.use(Toasted)

// Vue chart
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
Vue.use(Donut);

// Masonry Plugin
import { VueMasonryPlugin } from 'vue-masonry'
Vue.use(VueMasonryPlugin)
 

// Copy to clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
