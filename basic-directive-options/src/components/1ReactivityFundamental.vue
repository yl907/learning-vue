<script>
  export default {
    // 1.Reactivity Fundamental
    data() {
      return {
        count: 0
      }
    },

    methods: {
      increment() {
        this.count++;
      }
    },

    mounted() {
      this.increment();
    }
  }

</script>


<template>
  <!-- 1.Reactivity Fundamental -->
  <button @click="increment">Add 1</button>
  <br />
  <p>Count is: <span>{{ count }}</span></p>

</template>

<style scoped>
  span {
    font-size: 2em;
    text-decoration: underline 1px solid aqua;
  }
</style>