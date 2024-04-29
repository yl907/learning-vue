<!-- this component is about Slot Props, for which is used when the parent component want to use data in the child component. -->
<script setup>
  const greetingMessage = 'hi! slot props.';
</script>

<template>
  <div>
    <slot name="default" :text="greetingMessage" :count="1"></slot>
  </div>
</template>
