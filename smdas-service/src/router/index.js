import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/users/login.vue'
import register from '../views/users/register.vue'
import hu from '../views/stockmarket/hu.vue'
import shen from '../views/stockmarket/shen.vue'
import changepassword from '../views/users/changepassword.vue'
import news from '../views/hotspot/news.vue'
import companyNotices from '../views/hotspot/companyNotices.vue'
import mystock from '../views/mystock/mystock.vue'

// import Request from '@/utils/request.js'
 
// //post请求
// export const reqPostForm = (data) => http({url:'v1/PostForm',method:'post',data})
// //get请求
// export const reqGetFormList = (params) => Request({url:'/v1/GetFormList',method:'get',params})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   //这里需要将根目录默认为Home，方便实现用户在保持登录 状态下再次登录时直接跳转至主页面
    //     path:"/",
    //     redirect:{
    //       name:"Home"
    //     }
    //   },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/user/login',
      name: 'login',
      component: login   
    },
    {
      path: '/user/register',
      name: 'register',
      component: register
      
    },
    {
      path: '/StockMarket/hu',
      name: 'hu',
      component: hu
    },
    {
      path: '/StockMarket/shen',
      name: 'shen',
      component: shen
    },
    {
      path: '/user/changepassword',
      name: 'changepassword',
      component: changepassword
    },
    {
      path: '/hotspot/news',
      name: 'news',
      component: news
    },
    {
      path: '/hotspot/companyNotices',
      name: 'companyNotices',
      component: companyNotices
    },
    {
      path: '/mystock',
      name: 'mystock',
      component: mystock
    },

  ],

})

export default router;
