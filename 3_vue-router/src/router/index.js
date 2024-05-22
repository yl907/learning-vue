import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Eggs from '../views/Eggs.vue'
import User from '../views/1_1User.vue'

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

  // 1.Dynamic Route Matching
  {
    path: '/users/:id',
    component: User
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router