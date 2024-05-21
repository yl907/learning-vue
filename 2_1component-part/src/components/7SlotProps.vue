<!-- this component is about Slot Props, for which is used when the parent component want to use data in the child component. -->
<!-- slot props是用于在父组件中使用子组件提供内容的工具 -->
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