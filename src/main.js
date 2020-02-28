import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(BootstrapVue);

Vue.filter('uppercase', str => str.toUpperCase())

new Vue({
  render: h => h(App),
  store, router
}).$mount('#app')