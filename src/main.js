import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios;

import http from './utils/http'
Vue.prototype.$http = http;

import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/index.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import './mock/mock.js'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
