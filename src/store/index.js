import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import actions from './actions'
import mutations from './mutations'
import countModule from './modules/count'
import homeModule from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  // 根模块
  state: {
    count: 0,
    msg: "msg hello",
    userInfo: {
      name: "jeff",
      age: 18,
      sex: "male"
    }
  },
  getters: {
    getCount(state) {
      return `get count: ${state.countRoot}`
    }
  },
  actions,
  mutations,
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
  // 其他模块
  modules: {
    countModule,
    homeModule
  }
})