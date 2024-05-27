<script setup>
  import { useStore } from 'vuex';
  
  const store = useStore();

  function increment() {
    store.commit('increment', 1);
  }

  function delayedIncrement() {
    store.dispatch('delayedIncrement', 1);
  }
</script>

<template>
  <p>state.count: {{ $store.state.count }}</p>
  <p>getters.doubledcount: {{ $store.getters.doubledCount }}</p>
  <button @click="increment">increment by 1</button> | 
  <button @click="delayedIncrement">delayed increment</button>  
</template>

<style scoped>

</style>
