import Vue from "vue"

import App from "@/App.vue"

import VueRouter from 'vue-router'

import Vant from 'vant'
import {
    Toast
} from 'vant'

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
}, {
    path: '/parsonal',
    component: Parsonal
}]
var router = new VueRouter({
    routes
})


//路由守卫，就是页面跳转之前的拦截器
//to要跳转之后的页面，去哪里
//from跳转之前的页面，来自哪里
//next必须要调用next（），调用才会执行跳转，还可以重定向，next（‘/login’）
router.beforeEach((to,from,next)=>{
    //是否有token
    const hasToken=localStorage.getItem('token')
    //判断是否是需要登录权限的页面
    if(to.path==='/personal'){
        //判断本地是否有token
        if(hasToken){
            //正常跳转
            next();
        }else{
            //没有token正常跳转到登录
            next('/login')
        }
    }else{
        //所有人都可以访问的页面正常浏览
        next()
    }
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
    //token过期了，或者token无效，一般引起的原因可能token被清空，密码修改了
    if(message==='用户信息验证失败'){
        //跳转到登录
        router.push('/login')
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