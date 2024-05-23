import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Eggs from '../views/Eggs.vue'
import User from '../views/1_1User.vue'
import NotFound from '../views/1_2NotFound.vue'
import OrderId from '../views/2_1OrderId.vue'
import ProductName from '../views/2_2ProductName.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    component: () => AboutView
  },
  {
    // 使用':'来动态匹配具体的字符串，其中':id'表示一个动态字段(其可能是任何字符串)，我们称':id'为路径参数param。
    path: '/eggs/:eggType',
    component: () => Eggs
  },

  // 1.动态路由匹配  1.Dynamic Route Matching
  {
    path: '/users/:id',
    component: User
  },
  // 2.路由的匹配语法  2.Routes' Matching Syntax
  {
    path: '/:orderId(\\d+)',
    component: OrderId
  },
  {
    path: '/:productName',
    component: ProductName
  },

  // -1.404 Not Found(put this one at last, so it will match everything not match yet)
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router