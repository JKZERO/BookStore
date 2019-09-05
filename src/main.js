// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//android 点击300ms解决
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui';
//android toast和提示
import toast from 'toast2';

//移动端样式初始化
import 'styles/reset.css'
//1像素边框bug解决
import 'styles/border.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css'
import 'toast2/dist/toast.css';

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
