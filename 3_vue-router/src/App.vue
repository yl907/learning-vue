<script>
  import dataEggs from './data.json'
  export default {
    data() {
      return {
        dataEggs
      }
    }
  }
</script>

<template>
  <div class="view">
    <router-view></router-view>
  </div>
  <hr />
  <nav>
    <div class='box'>
      <!-- <a href="/">Home</a> |
      <a href="/about">About</a> | -->
      <router-link to="/">Home</router-link> |
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
</template> 

<style scoped>
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