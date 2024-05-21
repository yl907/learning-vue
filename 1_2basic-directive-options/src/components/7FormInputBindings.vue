<script>
  export default {
    data() {
      return {
        message: ''
      }
    }
  }
</script>

<template>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />
</template>

<style scoped>

</style>