/* 路由器对象模块 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 配置所有路由
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },       
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            // 默认路径时跳转到msite页面
            path:'/',
            redirect:'/msite'
        },
        {
            path:'/login',
            component:Login
            // 不写meta，默认showFooter为false
        }
    ]
})