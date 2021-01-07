
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    bgImg: true,
		userInfo: {}
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
			context.commit('setUserInfo', v);
		}
  },
  modules: {

  }
})