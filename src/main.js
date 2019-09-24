import Vue from "vue"

import App from "@/App.vue"

import VueRouter from 'vue-router'

import Vant from 'vant'
import {Toast} from 'vant'

import axios from 'axios'

import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Parsonal from '@/pages/Parsonal'


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
},{
    path:'/parsonal',
    component:Parsonal
}]
var router = new VueRouter({
    routes
})



//axios的统一的拦截器，拦截响应  每次请求经过
//固定的声明
axios.interceptors.response.use(res => {
    const {
        message,
        statusCode
    } = res.data;

    if (statusCode === 401) {    
        Toast.fail(message);
    }

    // 必须要返回res
    return res;
});

new Vue({
    el: "#app",
    router,
    render: function (createElement) {
        return createElement(App)
    }
})