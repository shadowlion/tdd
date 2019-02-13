import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Registration from './components/Registration'
import Officials from './components/Officials'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/officials',
      name: 'officials',
      component: Officials
    }
  ]
})
