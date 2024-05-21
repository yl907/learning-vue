<script>
  export default {
    mounted() {
      this.$refs.referenceToInput.focus();
      this.$refs.referenceToInput.value = 'Hello.';
    }
  }

</script>

<template>
  <p>Input below will be automatically focused, and filled with some text when the page is first loaded(mounted).</p>
  <input ref="referenceToInput" /> 
</template>

<style scoped>

</style>