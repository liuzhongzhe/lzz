import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import defaul from '@/components/default'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaul',
      component: defaul
    }
  ]
})
