<script>
  // 对如下代码我有一个问题: state是一个函数，那么为什么使用this.$store.state.count可以读取到count值？state并没有被调用，那么此处它难道不是一个函数吗？
  // 解释: 在 Vuex 中，state 是一个函数，但它在 createStore 创建 store 实例时会被调用一次，以初始化 state 对象。之后，这个 state 对象就存储在 Vuex store 实例的 state 属性中，供组件使用。
  let count = this.$store.state.count;
</script>

<template>
  <div>{{ count }}</div>
</template>

<style scoped>

</style>
