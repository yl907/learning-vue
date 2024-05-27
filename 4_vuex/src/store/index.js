import { createStore } from 'vuex'

const store = createStore({
  // 1.State:
  state() {
    return {
      count: 0
    }
  },
  // 2.Getter: vuex的getter就相当于vue中的computed, 具体功能如下:
  // 2.1.派生状态：getters 可以基于 state 计算出新的数据。
  // 2.2.缓存：getters 会根据其依赖关系进行缓存，只有在相关 state 发生变化时才会重新计算。
  // 2.3.访问：可以通过 this.$store.getters 在组件中访问计算后的数据。
  getters: {
    doubledCount (state) {
      return 2 * state.count;
    }
  },
  // 3.Mutation
  mutations: {
    // mutation第一个参数默认是state
    increment (state, n) {
      state.count += n
    }
  },
  // 4.Action
  actions: {
    // action第一个参数默认是store
    delayedIncrement (store, n) {
      setTimeout(() => {
        store.commit('increment', n);
      }, 3000);
    }
  },
  modules: {

  }
})

export default store;