<script>
  import ReactivityFundamental from './components/1ReactivityFundamental.vue'
  import ComputedProperties from './components/2ComputedProperties.vue'
  import ClassAndClassBindings from './components/3ClassAndClassBindings.vue'
  import ConditionalRendering from './components/4ConditionalRendering.vue'
  import ListRendering from './components/5ListRendering.vue'
  import EventHandling from './components/6EventHandling.vue'
  import FormInputBindings from './components/7FormInputBindings.vue'
  import LifecycleHooks from './components/8LifecycleHooks.vue'
  import Watchers from './components/9Watchers.vue'
  import TemplateRefs from './components/10TemplateRefs.vue'
  
  export default {
    components: {
      ReactivityFundamental,
      ComputedProperties,
      ClassAndClassBindings,
      ConditionalRendering,
      ListRendering,
      EventHandling,
      FormInputBindings,
      LifecycleHooks,
      Watchers,
      TemplateRefs
    }
  }

</script>


<template>
  <ReactivityFundamental></ReactivityFundamental> <hr />
  <ComputedProperties></ComputedProperties> <hr />
  <ClassAndClassBindings></ClassAndClassBindings> <hr />
  <ConditionalRendering></ConditionalRendering> <hr />
  <ListRendering></ListRendering> <hr />
  <EventHandling></EventHandling> <hr />
  <FormInputBindings></FormInputBindings> <hr />
  <LifecycleHooks></LifecycleHooks> <hr />
  <Watchers></Watchers> <hr />
  <TemplateRefs></TemplateRefs> <hr />

</template>

<style scoped>
  span {
    font-size: 2em;
    text-decoration: underline 1px solid aqua;
  }
</style>