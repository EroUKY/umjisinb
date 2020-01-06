import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(Vuex)

const SideBar = () => import('@/components/common/sidebar')
Vue.component('SideBar',SideBar)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

