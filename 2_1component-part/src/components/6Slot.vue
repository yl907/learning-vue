<script setup>

</script>

<template>
  <ol>
    <li>
      <span><slot name="item1"></slot></span>
    </li>
    <li>
      <span><slot name="item2"></slot></span>
    </li>
  </ol>
</template>

<style scoped>
  span {
    font-size: 2em;
    text-decoration: underline 1px solid aqua;
  }
</style>