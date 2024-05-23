<script>

</script>

<template>
  <div class='notFound'>404 Not Found</div>
  <p>we can not find /{{ $route.params.pathMatch }}</p>
</template>

<style scoped>
  .notFound {
    border: 1px solid black;
    width: fit-content;
    padding: 1em;
    font-size: 2em;
  }
</style>
