// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
import $ from 'jquery'
import moment from 'moment'
import marked from 'marked'
import Highlight from '@/libs/highlight';
import 'github-markdown-css';

//
Vue.use(Highlight);
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
