<script setup>
import {ref} from 'vue';
import Props1 from './components/1Props.vue'
import Props2 from './components/2Props.vue'
import Event from './components/3Event.vue'

  // Props1: this part is used to pass information from parent component to child component.
  let somevalue = "vue";
  let thisIsNumberAndNotString = 123;
  // Props2
  let dynamic1 = "nice to meet you";
  let dynamic2 = 5;
  // Event: this part is used to pass information from child component to parent component.
  const count = ref(0);
</script>

<template>
  <!-- 
    Notice the difference:
    static prop: foo,
    dynamic prop: bar
  -->
  <Props1 foo="hello" :bar="somevalue" :number-or-string="thisIsNumberAndNotString" ></Props1> <hr />
  <Props2 :dynamic1=dynamic1 :dynamic2=dynamic2></Props2> <hr />
  <Event @increase-by="(n) => count += n" @decrease-by="(n) => count -= n" @my-signal="() => count = 0"></Event> <p>we link the event in child component to a logical code block(or a function) in parent component <span>{{ count }}</span></p> <hr />
  
</template>

<style scoped>
  span {
    font-size: 2em;
    text-decoration: underline 1px solid aqua;
  }
</style>
