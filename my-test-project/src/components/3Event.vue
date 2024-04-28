<script setup>
  // const emit = defineEmits(['inFocus', 'submit']);

  function decreaseButtonClick() {
    emit('decreaseBy', 1);
  }
</script>

<template>
  <!-- 
    1.directly use '$emit'
    event name: increaseBy,
    event argument: 1
   -->
  <button @click="$emit('increaseBy', 1)">
    Increase by 1
  </button>
  <!-- 2.call funciton, then use 'emit' -->
  <button @click="decreaseButtonClick">
    Decrease by 1
  </button>
  <button @click="$emit('mySignal')">
    Change to 0
  </button>
</template>

<style>

</style>