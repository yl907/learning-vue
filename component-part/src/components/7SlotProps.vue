<!-- this component is about Slot Props, for which is used when the parent component want to use data in the child component. -->
<script setup>
  const greetingMessage = 'hi! slot props.';
</script>

<template>
  <div>
    <span><slot name="default" :text="greetingMessage" :count="1"></slot></span>
  </div>
</template>

<style scoped>
  span {
    font-size: 2em;
    text-decoration: underline 1px solid aqua;
  }
</style>