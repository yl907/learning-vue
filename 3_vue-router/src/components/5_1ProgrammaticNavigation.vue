<script setup>
  // setup
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function navigateToAbout() {
    router.push('/about');
  }
  function navigateToProgramNav() {
    router.push('/programNav/view');
  }
  function goBy(n) {
    router.go(n);
  }
</script>

<template>
  <div class="box">
    <h2>5.编程式导航</h2>
    <p>1.$router.push():</p>
    <button @click='navigateToAbout'>go to About</button> | 
    <button @click='navigateToProgramNav'>go to ProgramNav</button>    
    <p>2.$router.go():</p>
    <button @click="goBy(-1)">go -1(browser back←)</button>
    <button @click="goBy(1)">go +1(browser forward→)</button> | 
  </div>
  <div class="summary">
    <p>1.[编程式导航router.push(...)] 等价于 [声明式导航router-link :to="..."]</p>
    <p>2.编程式导航写在JavaScript部分, 声明式导航(作为一个元素)写在template部分。</p>
    <p>3.在本例中, 我们绑定了按钮的onClick为router.push(...), 于是点击按钮后就会进行相应的路由跳转。</p>
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
