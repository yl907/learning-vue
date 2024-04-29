<script setup>
import {ref} from 'vue'
import Props1 from './components/1Props.vue'
import Props2 from './components/2Props.vue'
import Event from './components/3Event.vue'
import Model from './components/4Model.vue'
import FallthroughAttributes from './components/5FallthroughAttributes.vue'

  // 1 Props1: this part is used to pass information from parent component to child component.
  let somevalue = "vue";
  let thisIsNumberAndNotString = 123;
  // 2 Props2
  let dynamic1 = "nice to meet you";
  let dynamic2 = 5;
  // 3 Event: this part is used to pass information from child component to parent component.
  const count = ref(0);
  // 4 Model
  const model = ref('this is v-model');
  const oldModel = ref('this is props and event');
  const myFirstName = ref('Yanle'), myLastName = ref('Wu');
  // 5 Fallthrough Attributes

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
  <Model v-model:model="model" 
    :old-model="oldModel" @update:old-model="(newInput) => {oldModel = newInput}"
    v-model:firstName="myFirstName" v-model:lastName="myLastName"
    >from parent variable 'model': <span>{{ model }}</span></Model> <hr />
  <FallthroughAttributes class="largeButton"></FallthroughAttributes>

</template>

<style scoped>
  span {
    font-size: 2em;
    text-decoration: underline 1px solid aqua;
  }

  .tip {
    border-radius: 2em;
    background-color: grey;
    margin: 1em;
    padding: 1em;
    color: white;
  }
</style>
