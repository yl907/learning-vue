<script>
  export default {
    data() {
      return {
        someValue: {
          value1: true,
          value2: 2,
          value3: "ok",
          value4: [1, 2, 3, 4],
          value5: 4
        }
      }
    },

    computed: {
      // 一个计算属性的 getter
      complicatedExpression() {
        // `this` 指向当前组件实例
        return ((this.someValue.value4.length < this.someValue.value5) && (this.someValue.value1 === true)) ? this.someValue.value2 : this.someValue.value3; 
      }
    },

    methods: {
      changeValue5: function() {
        if (this.someValue.value5 != 5) {
          this.someValue.value5 = 5;
        } else {
          this.someValue.value5 = 4;
        }
      }
    }
  }


</script>

<template>
  <button @click="changeValue5">
    {{ complicatedExpression }}
  </button>
</template>

<style scoped>
  span {
    font-size: 2em;
    text-decoration: underline 1px solid aqua;
  }
</style>