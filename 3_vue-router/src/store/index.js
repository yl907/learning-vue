import { createStore } from 'vuex'

const store = createStore({
  // 1.State:
  state() {
    return {
      login: true,
    }
  },
  
  mutations: {
    // mutation第一个参数默认是state
    changeAuth (state) {
      state.login = !state.login;
    }
  },
  
  actions: {

  },
  modules: {

  }
})

export default store;