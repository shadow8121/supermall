import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from './components/content/toast/'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/img/common/loader.gif')
})

Vue.use(Toast)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
