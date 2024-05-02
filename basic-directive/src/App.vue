<script setup>
  // 1.Reactivity Fundamental 响应式基础
  import { ref } from 'vue'
  const count = ref(0);
  function increment() {
    count.value++;
  }

  import { reactive } from 'vue';
  const state = reactive({ count: 0 });

  // 2.Computed Properties
  import { computed } from 'vue';
  const someValue = reactive({
    value1: true,
    value2: 2,
    value3: "ok",
    value4: [1, 2, 3, 4],
    value5: 4
  })
  const complicatedExpression = computed(() => {
    return ((someValue.value4.length < someValue.value5) && (someValue.value1 === true)) ? someValue.value2 : someValue.value3; 
  })
  function changeValue5() {
    if (someValue.value5 != 5) {
      someValue.value5 = 5;
    } else {
      someValue.value5 = 4;
    }
  }
  console.log(complicatedExpression);

  // 3.Class and Style Bindings
  const isActive = ref(true);
  const className1 = ref('good');
  const className2 = ref('red')

  // 4.Conditional Rendering
  const awesome = ref(true);

  const type = ref('Z');

  // 5.List Rendering
  const items = ref([{message: 'Foo'}, {message: 'Bar'}]);

  const myObject = reactive({
    purpose: 'How to do lists in Vue',
    greeting: 'Hello, v-for' 
  })

</script>

<template>
  <!-- 1.Reactivity Fundamental -->
  <span>button1 </span>
  <button @click="increment">
    {{ count }}
  </button>
  <br />

  <span>button2 </span>
  <button @click="state.count++">
    {{ state.count }}
  </button>
  <hr />

  <!-- 2.Computed Properties -->
  <button @click="changeValue5">
    {{ complicatedExpression }}
  </button>
  <hr />

  <!-- 3.Class and Style Bindings -->
  <!-- we use an Object here, because we want to use a 'key value' structure to specify if such property is exist -->
  <div :class="{ active:isActive }">this div has a class 'active'.</div>
  <!-- we use Array here, because we need multiple class here, and every class is certainly exist. -->
  <div :class="[className1, className2]">this div has two class, check it out.s</div>
  <hr />

  <!-- 4.Conditional Rendering -->
  <button @click="awesome = !awesome">Toggle</button>
  <p v-if="awesome">Vue is awesome!</p>
  <p v-else>Oh no 😢</p>

  <span>What type is it: </span>
  <span v-if="type === 'A'">A</span>
  <span v-else-if="type === 'B'">B</span>
  <span v-else-if="type === 'C'">C</span>
  <span v-else>Not A/B/C</span>
  <hr />
  <!-- 5.List Rendering -->
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

  <!-- 6. -->
</template>

<style scoped>
  * {
    line-height: 1.6em;
  }
</style>