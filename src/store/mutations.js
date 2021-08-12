export default {
  ["INCREMENT"](state, payload) {
    state.count = 2
    state.countModule.count++
  },
  ['CHANGE_MSG'](state, payload) {
    state.msg = payload
  },
  ['CHANGE_USER_INFO'](state, payload) {
    state.userInfo = payload
  },
}
