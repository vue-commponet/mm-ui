import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/reset.styl'
import '~/theme-styles/index.styl'
import MMUI from '~/index.js'
Vue.use(MMUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
