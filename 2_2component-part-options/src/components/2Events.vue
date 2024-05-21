<script>
  export default {
    props: ['button_value'],
    methods: {
      submit() {
        this.$emit('someEvent1');
      }
    }
  }
</script>

<template>
  <button @click="submit">Button1</button>
  <button @click="$emit('someEvent2')">Button2</button>
  <p>{{ button_value }}</p>
</template>

<style scoped>

</style>
