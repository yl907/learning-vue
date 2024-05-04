<script>
  export default {
    data() {
      return {
        isActive: true,
        className1: 'good',
        className2: 'red'
      }
    }
  }
</script>

<template>
  <div :class="{ active:isActive }">this div has a class 'active'.</div>
  <div :class="[className1, className2]">this div has two class, check it out.</div>

</template>

<style scoped>

</style>