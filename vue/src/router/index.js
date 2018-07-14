import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
     {
        path: '/login',
        name: 'Login',
        component: Login,
     },
    {
      path: '/',
      meta: {
        title: '首页'
      },
      name: 'Home',
      component: Home
    },
    {
        path: '/list',
        meta: {
            title: 'list'
        },
        name: 'List',
        component: List
    }
  ]
})
