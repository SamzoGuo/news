import Vue from "vue"

import App from "@/App.vue"

import VueRouter from 'vue-router'

import Vant from 'vant'

import axios from 'axios'

import Login from '@/pages/Login'
import Register from '@/pages/Register'


Vue.use(VueRouter)
Vue.use(Vant);

//把axios挂载到原型
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://localhost:3000";

var routes = [{
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register
}]
var router = new VueRouter({
    routes
})


new Vue({
    el: "#app",
    router,
    render: function (createElement) {
        return createElement(App)
    }
})