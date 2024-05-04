<script>
  export default {
    data() {
      return {
        items: [{message: 'Foo'}, {message: 'Bar'}],
        myObject: {
          purpose: 'How to do lists in Vue',
          greeting: 'Hello, v-for' 
        }
      }
    }
  }
</script>

<template>
  <!-- 5.1.Array -->
  <ul>
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>
  
  <ul>
    <li v-for="(item, index) in items">
      {{ index }} - {{ item.message }}
    </li>
  </ul>
  
  <!-- 5.2.Object -->
  <ul>
    <li v-for="value in myObject">{{ value }}</li>
  </ul>

  <ul>
    <li v-for="(value, key) in myObject">{{ key }}: {{ value }}</li>
  </ul>

  <ul>
    <li v-for="(value, key, index) in myObject">{{ index }}. {{ key }}: {{ value }}</li>
  </ul>
</template>

<style scoped>

</style>