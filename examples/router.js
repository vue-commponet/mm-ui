import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout/layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home.vue')
    },
    {
      path: '/docs',
      name: 'docs',
      component: Layout,
      redirect: 'install',
      children: [
        {
          path: '/install',
          name: 'install',
          component: () => import('./views/install/index.vue')
        },
        {
          path: '/start',
          name: 'start',
          component: () => import('./views/start/index.vue')
        },
        {
          path: '/button',
          name: 'button',
          component: () => import('./views/button/index.vue')
        },
        {
          path: '/input',
          name: 'input',
          component: () => import('./views/input/index.vue')
        }
      ]
    }
  ]
})
