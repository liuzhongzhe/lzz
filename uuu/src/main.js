// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "babel-polyfill";
import router from './router'
import ElementUI from 'element-ui'  
import '../node_modules/element-ui/lib/theme-chalk/index.css' 
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
