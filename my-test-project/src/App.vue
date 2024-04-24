<script setup>
  import SimpleComponent from './components/1SimpleComponent.vue'

  let somevalue = "vue";
  let thisIsNumberAndNotString = 123;
</script>

<template>
  <!-- 
    Notice the difference:
    static prop: foo,
    dynamic prop: bar
  -->
  <SimpleComponent foo="hello" :bar="somevalue" :number-or-string="thisIsNumberAndNotString"></SimpleComponent>
</template>

<style scoped>

</style>
