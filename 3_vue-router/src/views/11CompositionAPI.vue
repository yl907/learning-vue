<script setup>
  import {useRoute, useRouter} from 'vue-router'

  const router = useRouter();
  const route = useRoute();

</script>

<template>
  <p>hello, {{ route.params.id }}</p>
</template>

<style scoped>

</style>
