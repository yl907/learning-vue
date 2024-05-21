<script setup>
  // useAttrs() shows all the fallthrough attributes
  import { useAttrs } from 'vue';
  const alsoAttrs = useAttrs();
</script>

<template>
  <!-- Fallthrough Attributes, $attrs here is "'class': 'largeButton'" -->
  <button v-bind="$attrs">large button</button>
  <button>normal size</button>
  <!-- this is the value of fallthrough attrs, we use $attrs to specify it in <template> -->
  <p>from $attrs in template: {{ $attrs }}</p>
  <!-- this is also the value of fallthrough attrs, but this one is variable which can be used in <script> -->
  <p>from useAttrs() in script: {{ alsoAttrs }}</p>
</template>

<style scoped>
  .largeButton{
    padding: 2em;
    margin: 2em;
    font-size: large;
  }
</style>
