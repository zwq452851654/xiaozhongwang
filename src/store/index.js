
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    bgImg: true
  },
  getters:{

  },
  mutations: {
    setLogin(state, v){
      state.isLogin = v;
    }
  },
  actions: {
    loginFun(context, v){
      console.log('isLogin被修改了...')
      context.commit('setLogin', v);
    }
  },
  modules: {

  }
})