<script>
  export default {
    data() {
      return {
        originalData: 2,
        doubledData: 4
      }
    },

    watch: {
      originalData() {
        this.doubledData = this.originalData * 2;
      }
    },

    methods: {
      changeOriginalData: function() {
        this.originalData++;
      }
    }
  }

</script>

<template>
  <button @click="changeOriginalData">Add</button>
  <p>origin: {{ originalData }}</p>
  <p>doubled: {{ doubledData }}</p>
</template>

<style scoped>

</style>