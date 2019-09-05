import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = r => require.ensure([], () => r(require('@/pages/Home')), 'Home');
const Main = r => require.ensure([], () => r(require('@/pages/home/Main')), 'Main');
const Classify = r => require.ensure([], () => r(require('@/pages/classify/Classify')), 'Classify');
const Cart = r => require.ensure([], () => r(require('@/pages/cart/Cart')), 'Cart');
const My = r => require.ensure([], () => r(require('@/pages/my/My')), 'My');

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Main',
          component: Main,
          meta: {
            keepAlive: true,
            title: '首页'
          }
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
