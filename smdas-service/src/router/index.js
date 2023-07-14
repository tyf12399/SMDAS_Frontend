import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/users/login.vue'
import register from '../views/users/register.vue'
import changepassword from '../views/users/changepassword.vue'
import news from '../views/hotspot/news.vue'
import companyNotices from '../views/hotspot/companyNotices.vue'
import mystock from '../views/mystock/mystock.vue'
import shenanalysis from '../views/stockmarket/shen/shenanalysis.vue'
import shenselect from '../views/stockmarket/shen/shenselect.vue'
import huselect from '../views/stockmarket/hu/huselect.vue'
import huanalysis from '../views/stockmarket/hu/huanalysis.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
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
   
    {
      path: '/StockMarket/shen/shenanalysis',
      name: 'shenanalysis',
      component: shenanalysis
    },
    {
      path: '/StockMarket/shen/shenselect',
      name: 'shenselect',
      component: shenselect
    },
    {
      path: '/StockMarket/hu/huselect',
      name: 'huselect',
      component: huselect
    },
    {
      path: '/StockMarket/hu/huanalysis',
      name: 'huanalysis',
      component: huanalysis
    },
   

  ],

})

export default router;
