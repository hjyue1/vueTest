import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from 'configs'
import FastClick from 'fastclick'
import routes from './routes'
import store from './store'
import { getAllMessages } from './store/actions'

import request from 'superagent';
import proxyCreate from 'superagent-cors-proxy';
import ua from 'helpers/ua';
import { YUN, ACCOUNT, DOMAIN } from 'constants'


console.log(location)

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})


new Vue({
    el: '#app',
    router,
    store
})
getAllMessages(store)