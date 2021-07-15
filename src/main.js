import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from '@/services/router.js'

Vue.use(router)

new Vue({
  router, render: h => h(App)
}).$mount('#app')
