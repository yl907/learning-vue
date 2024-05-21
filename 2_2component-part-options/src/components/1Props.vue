<script>
  export default {
    // props: ['foo']
    props: {
      title: String,
      likes: Number
    },
    created() {
      console.log(this.foo)
    }
  }
</script>

<template>
  <p>{{ title }}</p>
  <p>{{ likes }}</p>
</template>

<style scoped>

</style>
