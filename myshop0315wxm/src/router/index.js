import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/index/Home";
import Shopinfo from "@/views/shopinfo/Home";
import Login from "@/views/login/Home";
import Register from "@/views/register/Home";
import Shopcart from '@/views/shopcart/Home.vue';
import Pay from '@/views/pay/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shopinfo',
    name: 'shopinfo',
    component: Shopinfo,
    meta: {
      title: '商品信息'
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: Shopcart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
    meta: {
      title: '支付'
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
