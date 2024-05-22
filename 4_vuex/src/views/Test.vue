<script>
  export default {
    created() {
      console.log(this.$store.state.loginState);
      this.handler();
    },
    methods:{
      handler() {
        this.$store.commit('changeCount', 1);
        this.$store.commit('changeCount', 2);
        this.$store.dispatch('delayChangeCount', 10);
      }
    }
  }
</script>

<template>
  <p>Test</p>
</template>

<style scoped>

</style>