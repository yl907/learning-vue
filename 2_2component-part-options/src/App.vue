<script>
  import Props from './components/1Props.vue'
  import Events from './components/2Events.vue'
  import Model from './components/3Model.vue'
  import FallthroughAttrs from './components/4FallthroughAttrs.vue'
  import Slots from './components/5Slots.vue'
  import Provide_Inject from './components/6_1Provide_Inject.vue'

  
  
  export default {
    data() {
      return {
        // 2Event
        button_value: 0,
        // 3Model
        var1: 'hello',
        var2: 'Model'
      }
    },
    components: {
      Props,
      Events,
      Model,
      FallthroughAttrs,
      Slots,
      Provide_Inject
    },
    methods: {
      addButtonValue() {
        this.button_value++;
      }
    },
    provide: {
      message: 'provided message'
    }

  }
</script>

<template>
  <Props title="hello" likes=0></Props>
  <hr />
  <Events @some-event1="button_value--" @some-event2="addButtonValue" :button_value="button_value"></Events>
  <hr />
  <Model v-model:var1Connecting="var1" v-model:var2Connecting="var2"></Model>
  <hr />
  <FallthroughAttrs class="IamFallthroughClass" id="IamFallthroughID"></FallthroughAttrs>
  <hr />
  <Slots>
    <template v-slot:slot1>this is slot 1</template>
    <template v-slot:slot2>this is slot 2</template>
  </Slots>
  <hr />
  <Provide_Inject></Provide_Inject>
  <hr />
</template>

<style scoped>

</style>
