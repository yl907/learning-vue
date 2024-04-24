<script setup>
  // props is only readable in child component, value is determined by parent component, and we declare props here is only because we want our app to search for the props and so we can use it(which means if props is searched automatically we don't actually need to declare this, but it may be confusing and time-consuming.)
  const props = defineProps(['foo', 'bar', 'numberOrString']);
</script>

<template>
  <p>{{ props.foo }} {{ props.bar }}!</p>
  <br />
  <p>This is a number, we can calculate it. Originally it is {{ numberOrString }}, double is {{ numberOrString * 2 }}</p>
  <p>Although we write this props in parent component as (:number-or-string="thisIsNumberAndNotString") but however the reason we use v-vind is to make things in " " to be a variable, and vue takes it as a variable, that's our intention. </p>
</template>
