<script>
  export default {
    data() {
      return {
        awesome: true,
        type: 'Z'
      }
    }
  }
</script>

<template>
  <button @click="awesome = !awesome">Toggle</button>
  <p v-if="awesome">Vue is awesome!</p>
  <p v-else>Oh no 😢</p>

  <span>What type is it: </span>
  <span v-if="type === 'A'">A</span>
  <span v-else-if="type === 'B'">B</span>
  <span v-else-if="type === 'C'">C</span>
  <span v-else>Not A/B/C</span>
  
</template>

<style scoped>

</style>