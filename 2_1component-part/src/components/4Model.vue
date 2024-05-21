<script setup>
  const model = defineModel('model');

  // older version:
  const props = defineProps(['oldModel']);
  const emit = defineEmits(['update:oldModel']);

  // multiple v-model
  const firstName = defineModel('firstName');
  const lastName = defineModel('lastName');
  

</script>

<template>
  <slot></slot>
  <p>from child variable 'model': <span>{{ model }}</span></p>
  <div>My input <input v-model="model"></div>

  <!-- older version -->
  <p>old way to achieve two ways binding: <span>{{ props.oldModel }}</span></p>
  <div>My input
    <input 
      :value="props.oldModel" 
      @input="emit('update:oldModel', $event.target.value)"
    />
  </div>
  <div class="tip">So use props and event also can achieve two ways binding, but since props is designed to be only readable in child component to prevent child component interrupting parent component state, we have to use event to let the parent component know there's something happen, and let the parent component to choose what to do.</div>

  <!-- multiple v-model -->
  <p>My name: <span>{{ firstName }} {{ lastName }}</span></p>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />

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