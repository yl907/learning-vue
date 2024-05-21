<script>
  export default {
    data() {
      return {
        greetingMessage: 'click me!'
      }
    },

    methods: {
      greet: function(event) {
        if (this.greetingMessage !== 'Hello, Vue.js'){
          this.greetingMessage = 'Hello, Vue.js';
        } else {
          this.greetingMessage = 'click me!';
        }
      }
    }
  }

</script>

<template>
  <button @click="greet">{{ greetingMessage }}</button>

</template>

<style scoped>

</style>