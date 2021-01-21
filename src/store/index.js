
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    bgImg: true,
		userInfo: JSON.parse(localStorage.getItem('userInfo')) || {}
  },
  getters:{

  },
  mutations: {
    setLogin(state, v){
      state.isLogin = v;
    },
		setUserInfo(state, v){
			state.userInfo = v;
		}
  },
  actions: {
    loginFun(context, v){
      context.commit('setLogin', v);
    },
		dis_user_info(context, v){
			let userInfo = JSON.stringify(v)
			localStorage.setItem('userInfo', userInfo);
			context.commit('setUserInfo', v);
		}
  },
  modules: {

  }
})