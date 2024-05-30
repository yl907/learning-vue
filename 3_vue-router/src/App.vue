<script>
  import dataEggs from './data.json'
  import ProgramNavComp from './components/5_1ProgrammaticNavigation.vue'
import store from './store';

  export default {
    data() {
      return {
        dataEggs,
        templateIn6Multiviews: `
<router-view></router-view>
<router-view name="LeftSidebar"></router-view>
<router-view name="RightSidebar"></router-view>
`.trim()
      }
    },
    components: {
      ProgramNavComp
    },
    methods: {
      changeAuth() {
        store.commit('changeAuth');

      },
    },

  }

</script>

<template>
  <div class="view">
    <router-view></router-view>
    <div class="twoColumns">
      <div><router-view name="LeftSidebar"></router-view></div>
      <div><router-view name="RightSidebar"></router-view></div>
    </div>
  </div>
  <hr />
  <nav>
    <div class='box'>
      <!-- <a href="/">Home</a> |
      <a href="/about">About</a> | -->
      <router-link to="/">Home</router-link> |
      <!-- <router-link :to="{ path: '/' }">Home</router-link> | -->
      <router-link to="/about">About</router-link> |
      <router-link v-for="dataEgg in dataEggs"
        :key="dataEgg.id"
        :to="`/eggs/${dataEgg.type}`">
        {{ dataEgg.name }} |
      </router-link>
      <router-link to="/eggs/no-such-egg">no such egg</router-link>
    </div>
  </nav>  
  <hr />
  <!-- 1.动态路由匹配 -->
  <!-- 1.Dynamic Route Matching -->
  <div class='box'>
    <h2>1.动态路由匹配</h2>
    <p>1.尝试输入路径<router-link to="/users/123">http://localhost:5173/users/123</router-link>, 然后将123改成任意字符串试试。</p>          
    <!-- <p>1.Dynamic Route Matching: Try to input url http://localhost:5173/users/123, and replace 123 to any string.</p> -->
  </div>
  <div class="summary">
    <p>
      1.1.首先制定路由规则, <br />  
      { <br />
        path: '/users/:id', <br />
        component: User <br />
      }
    </p>
    <p>1.2.然后在User视图(组件)中调用$route.params.id来查看路由规则中定义的路径参数:id</p>
    <p>
      2.还可以输入任意url, 在路由规则的最后我加入了<br />
      {<br />
        path: '/:pathMatch(.*)',<br />
        component: NotFound<br />
      }<br />
      上方代码可以匹配任意url, 于是任何尚未匹配的url路径都会被导向NotFound对应的组件, 这将显示404 Not Found.
    </p>
  </div>
  <hr />
  <!-- 2.路由的匹配语法 -->
  <!-- 2.Routes' Matching Syntax -->
  <div class="box">
    <h2>2.路由的匹配语法</h2>
    <p>1.尝试输入路径<router-link to="/321">http://localhost:5173/321</router-link>和<router-link to="/9abc123">http://localhost:5173/9abc123</router-link></p>
  </div>
  <div class="summary">
    <p>1.路由规则如下: <br />
    { <br />
      path: '/:orderId(\\d+)',<br />
      component: OrderId<br />
    },<br />
    {<br />
      path: '/:productName',<br />
      component: ProductName<br />
    }<br />
  </p>
  <p>2.其中(\\d+)是正则表达式, <a target="blank_" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions">参考MDN正则表达式教程</a></p>
  </div>
  <hr />
  <!-- 3.嵌套路由 -->
  <div class="box">
    <h2>3.嵌套路由</h2>
    <p>1.嵌套路由: 尝试输入路径<router-link to="/nest/123/profile">http://localhost:5173/nest/123/profile</router-link>和<router-link to="/nest/123/posts">http://localhost:5173/nest/123/posts</router-link></p>
    <router-link to="/">
      <button @click="changeAuth">修改login状态: {{ $store.state.login }} <br />
      (这是有关第9部分路由元信息的内容。尝试点击该按钮后, 再次点击上方http://localhost:5173/nest/123/posts链接, 你会发现不同login状态下的相同路由会有不同表现。)</button>
    </router-link>
  </div>
  <div class="summary">
    <p>1.嵌套路由是在router-view标签内继续加入router-view标签: <br />
      外部router-view会在第一个匹配到的路由规则下查找对应组件并显示; <br />
      内部router-view会在该路由规则中查找children属性(children属性对应的值也是路由规则), 并将children属性中匹配到的第一个路由规则的对应组件显示在内部router-view处。</p>
  </div>
  <hr />
  <!-- 4.命名路由 -->
  <div class="box">
    <h2>4.命名路由</h2>
    <p>1.命名路由: 在路由规则中加入name属性, 使得在router-link中可以使用name来进行跳转而非原先的使用path路径。</p>
    <p>2.以下一个router-link元素, 其使用name进行跳转:</p>
    <router-link :to="{ name: 'named', params: { exampleParams: 'some info here' } }">命名路由跳转</router-link>
  </div>
  <div class="summary">
    <p>
      1.本例中命名路由规则的格式是: <br />
      { <br />
        path: '/named/:exampleParams', <br />
        name: 'named', <br />
        component: NamedRoutes <br />
      }
    </p>
    <p>2.使router-link实现使用name进行路由跳转, 本例中router-link属性如下: <br />
       :to="{ name: 'named', params: { exampleParams: 'some info here' } }</p>
    <p>3.还存在一个问题是当使用name进行路由跳转时, 原本在使用path时标明的路径参数在这种情况下是未知的。 如果要实现路径参数则需要在router-link中加入params属性, 在其中给出所有路径参数。在给出路径参数后，路由对应组件NamedRoutes中包含$route.params.exampleParams即可被使用。</p>
    <p>4.综上可以看出命名路由只是普通path路由的一个别名, 其效果跟path路由是完全一致的。</p>
  </div>
  <hr />
  <!-- 5.编程式导航 -->
  <ProgramNavComp></ProgramNavComp>
  <hr />
  <!-- 6.命名视图 -->
  <div class="box">
    <h2>6.命名视图</h2>
    <p>1.命名视图: 当我们需要同时展示多个视图时, 例如创建一个布局, 有sidebar和main两个视图, 这个时候命名视图就派上用场了。</p>
    <p>2.<router-link to="/multiViews">跳转到命名视图路径(常用于存在多个视图的情况)</router-link></p>
  </div>
  <div class="summary">
    <p>1.本例中的命名视图的路由规则如下: <br />
      { <br />
        path: '/multiViews', <br />
        components: { <br />
          default: NamedViews, <br />
          LeftSidebar: LeftSidebar, <br />
          RightSidebar: RightSidebar <br />
        } <br />
      }
    </p>
    <p>2.这种情况下router-view也要有3个, 分别是: <br />
      <pre>{{ templateIn6Multiviews }}</pre>
    </p>
  </div>
  <hr />
  <!-- 7.重定向与别名 -->
  <div class="box">
    <h2>7.重定向与别名</h2>
    <p>
      1.重定向: 本例中, 当你访问 /home 时, 会自动重定向到 /. <br />
      { <br />
      path: '/home', <br />
      redirect: '/' <br />
      }
    </p>
    <p>2.别名: 重定向是指当用户访问 /home 时, URL 会被 / 替换, 然后匹配成 /. 那么什么是别名呢?
  将 / 别名为 /home, 意味着当用户访问 /home 时, URL 仍然是 /home, 但会被匹配为用户正在访问 /.(相对于重定向而言, URL不会发生改变)</p>
    <p>3.别名实例: 尝试访问 /anotherAbout , 在该页面实际上是在访问 /about. </p>
  </div>
  <div class="summary">
    <p>1.重定向和别名都是在访问url_1时, 呈现url_2的页面, 其中重定向改变用户界面的url路径, 别名则不改变url路径。</p>
  </div>
  <hr />
  <!-- 8.导航守卫 -->
  <div class="box">
    <h2>8.导航守卫</h2>
    <p>1.可以参考src/router/index.js中关于全局前置守卫beforeEach的代码, 该代码检测路径参数id是否只由0构成, 如果是那么该路由不会跳转.</p>
    <p><router-link to="/users/000">http://localhost:5173/users/000 <br />
      (无法通过点击该链接跳转, 当全局前置守卫返回false时, 这种跳转被直接禁止。但可以通过直接输入该url进行测试)</router-link></p>
    <p>2.为什么还需要全局解析守卫beforeResolve, 而不能只用beforeEach? </p> 
    <ol>
      <li>为了异步组件加载, beforeEach 无法保证所有异步组件都已经加载完成。如果某些逻辑依赖于这些组件, 使用 beforeResolve 可以确保这些组件都已经就绪。</li>
      <li>为了最后一步确认, 有时候你需要在所有前置操作完成后进行最终的检查或确认, 比如在所有异步操作和权限检查完成后再做某些决定。</li>
    </ol>
    <p>
      3.beforeEnter:beforeEnter 守卫 只在进入路由时触发，不会在 params、query 或 hash 改变时触发。例如，从 /users/2 进入到 /users/3 或者从 /users/2#info 进入到 /users/2#projects。它们只有在 从一个不同的 路由导航时，才会被触发。<br />
      <br />
      本例中代码如下: <br />
      path: '/nest/:id', <br />
      component: NestedRoutes, <br />
      beforeEnter: (to, from) => { <br />
        if (to.params.id === '001') { <br />
          return false; <br />
        } <br />
      },  <br />
      所以访问<router-link to="/nest/001">http://localhost:5173/nest/001 (该链接由于没有路由数据返回, 同样无法通过点击跳转, 请尝试输入该url进行测试)</router-link>时, 不会有路由数据被返回。
    </p> 
  </div>
  <hr />
  <!-- 9.路由元信息 -->
  <div class="box">
    <h2>9.路由元信息</h2>
    <p>参考[3.嵌套路由]中的"修改login状态"按钮, 路由元信息(meta)配合导航守卫(beforeEach)使得具有特定路由元信息的路由有额外效果, 在此处是确认登录后才有权限查看profile, 否则会跳转到登录页面。</p>
  </div>
  
</template> 

<style scoped>
  .twoColumns {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .view {
    position: sticky;
    top: 0px;
    left: 0px;
    border-radius: 1em;
    padding: 1em;
    background-color: blanchedalmond;
  }

  .box {
    padding: 1em;
    border: 1px solid black;
    border-radius: 1em;
    background-color: rgb(187, 237, 206);
  }

  a {
    color: black;
  }

  a:hover {
    text-decoration: none;
  }

  .summary {
    color: white;
    background-color: rgba(18, 17, 22, 0.733);
    border-radius: 2em;
    padding-top: 1em; padding-bottom: 1em;  padding-left: 2em; padding-right: 2em;
    border: 1px solid;
    margin-top: 1em;
    width: fit-content;
    
    a {
      color: white;
    }
  }
</style>