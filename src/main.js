// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import router from './router'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);
Vue.config.productionTip = false;
import store from './store';

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  //...App,等价于下面的components+template写法
  components: {
    App
  },
  template: '<App/>',
  router,
  store
})
