<script>

</script>

<template>
  <div class="user">
    <p>User ID: {{ $route.params.id }}</p>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .user > p {
    border-bottom: 1px solid black;
  }
</style>
