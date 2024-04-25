<script setup>
import Props1 from './components/1Props.vue'
import Props2 from './components/2Props.vue'

  let somevalue = "vue";
  let thisIsNumberAndNotString = 123;
  let dynamic1 = "nice to meet you";
  let dynamic2 = 5;
</script>

<template>
  <!-- 
    Notice the difference:
    static prop: foo,
    dynamic prop: bar
  -->
  <Props1 foo="hello" :bar="somevalue" :number-or-string="thisIsNumberAndNotString" ></Props1>
  <hr />
  <Props2 :dynamic1=dynamic1 :dynamic2=dynamic2></Props2>
</template>

<style scoped>

</style>
