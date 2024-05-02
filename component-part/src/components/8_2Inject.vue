<script setup>
  import { inject } from 'vue'

  const messageFromGrandparent = inject('message')
  const defaultInject = inject('noSuchProvide', 'default value')
</script>

<template>
  <p><span>{{ messageFromGrandparent }}</span></p>
  <p>if no such provide, we will use default value which is specified in the inject() function as second parameter:<span>{{ defaultInject }}</span></p>
</template>

<style scoped>
  span {
    font-size: 2em;
    text-decoration: underline 1px solid aqua;
  }
</style>