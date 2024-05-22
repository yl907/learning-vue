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
  <router-view></router-view>

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
    <hr />
    <!-- 1.动态路由匹配 -->
    <div class='box'>
      <p>1.动态路由匹配: 尝试输入路径http://localhost:5173/users/123, 然后将123改成任意字符串试试。</p>          
      <p>1.Dynamic Route Matching: Try to input url http://localhost:5173/users/123, and replace 123 to any string.</p>
    </div>
    <div class="summary">
      <p>
          1.首先制定路由规则, <br />  
        { <br />
          path: '/users/:id', <br />
          component: User <br />
        } <br />
      </p>
      <p>2.然后在视图中调用$route.params.id来查看路由规则中定义的路径参数:id
      </p>
    </div>
    <hr />

  </nav>
</template> 

<style scoped>
  .box {
    padding: 1em;
    border: 1px solid black;
    border-radius: 1em;
    background-color: rgb(187, 237, 206);
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
  }
</style>