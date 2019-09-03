import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Main from '@/pages/home/Main'
import Classify from '@/pages/classify/Classify'
import Cart from '@/pages/cart/Cart'
import My from '@/pages/my/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Main',
          component: Main
        },
        {
          path: '/Classify',
          name: 'Classify',
          component: Classify
        },
        {
          path: '/Cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/My',
          name: 'My',
          component: My
        }
      ]
    }
  ]
})
