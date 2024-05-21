<script>
  export default {
    props: ['var1Connecting', 'var2Connecting']
  }
</script>

<template>
  <p>{{ var1Connecting }}, {{ var2Connecting }}</p>
  <!-- 好像update:var1Connecting就是一个专门用于给var1Connecting对应的父组件变量(此处为App.vue中的var1)进行赋值更新操作的函数，下方的事件参数($event.target.value)就是具体赋值。 -->
  <input :value="var1Connecting" @input="$emit('update:var1Connecting', $event.target.value)">
  <input :value="var2Connecting" @input="$emit('update:var2Connecting', $event.target.value)">  
</template>

<style scoped>

</style>
