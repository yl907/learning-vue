<script setup>
  const props = defineProps({
    dynamic1: String,
    dynamic2: Number
  })
</script>

<template>
  <p>We can specify the data type, for example a String: <span>{{ props.dynamic1 + ' (concatenated)' }}</span></p>
  <p>a Number: <span>{{ props.dynamic2 + 5}}</span>, this number is added 5 from origin <span>{{ props.dynamic2 }}</span>.</p>
</template>

<style scoped>
  span {
    font-size: 2em;
    text-decoration: underline 1px solid aqua;
  }
</style>