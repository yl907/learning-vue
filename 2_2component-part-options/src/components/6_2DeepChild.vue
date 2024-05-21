<script>
  export default {
    inject: ['message'], 
    data() {
      return {
        message: this.message
      }
    }
  }
</script>

<template>
  {{ message }}

</template>

<style scoped>

</style>
