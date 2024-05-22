import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      loginStatus: '用户已经登录',
      count: 0
    }
  },
  getters: {
    
  },
  mutations: {
    changeCount (state, num) {
      state.count += num;
      console.log(`new count: ${state.count}`);
    }
  },
  actions: {
    delayChangeCount (store, num) {
      setTimeout(() => {
        store.commit('changeCount', num)
      }, 3000);
    }
  },
  modules: {

  }
})

export default store;