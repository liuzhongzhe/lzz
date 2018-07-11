// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'  
import '../node_modules/element-ui/lib/theme-chalk/index.css' 
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
import echarts from 'echarts'
Vue.use(router);
Vue.use(iView);
Vue.prototype.$echarts = echarts 
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
