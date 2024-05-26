import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/0_HomeView.vue';
import AboutView from '../views/0_AboutView.vue';
import Eggs from '../views/0_Eggs.vue'
import User from '../views/1_1User.vue'
import NotFound from '../views/1_2NotFound.vue'
import OrderId from '../views/2_1OrderId.vue'
import ProductName from '../views/2_2ProductName.vue'
import NestedRoutes from '../views/3_1NestedRoutes.vue'
import NestedProfile from '../views/3_2NestedProfile.vue'
import NestedPosts from '../views/3_3NestedPosts.vue'
import NamedRoutes from '../views/4_1NamedRoutes.vue'
import ProgramNavView from '../views/5_1ProgrammaticNavigation.vue'
import NamedViews from '../views/6_1DefaultView.vue'
import LeftSidebar from '../views/6_2LeftSidebar.vue'
import RightSidebar from '../views/6_3RightSidebar.vue'

const routes = [
  {
    path: '/',
    // this is Lazy Loading
    component: () => import('../views/0_HomeView.vue')
  },
  {
    path: '/about',
    component: AboutView,
    alias: '/anotherAbout'
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
  // 3.嵌套路由  3.Nested Routes
  {
    path: '/nest/:id',
    component: NestedRoutes,
    children: [
      {
        // 3.1.匹配/nest/:id/profile
        path: 'profile',
        component: NestedProfile,
      },
      {
        // 3.2.匹配/nest/:id/posts
        path: 'posts',
        component: NestedPosts,
      }
    ]
  },
  // 4.命名路由  4.Named Routes
  {
    path: '/named/:exampleParams',
    name: 'named',
    component: NamedRoutes
  },
  // 5.编程式导航  5.Programmatic Navigation
  // 编程式导航router.push(...)等价于声明式导航<router-link :to="...">
  // 具体跳转例子在本文件(.js文件)后面的代码中(而非声明式导航那样在template或说是html中)。
  {
    path: '/programNav/view',
    component: ProgramNavView
  },
  //6.命名视图  6.Named Views
  {
    path: '/multiViews',
    components: {
      default: NamedViews,
      LeftSidebar: LeftSidebar,
      RightSidebar: RightSidebar
    }
  },
  // 7.重定向和别名  7.Redirect and Alias
  {
    path: '/home',
    redirect: '/'
  },
  // 7.1别名部分写在/about路由规则中

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