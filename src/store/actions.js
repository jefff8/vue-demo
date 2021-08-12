export default {
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  increment({ commit, dispatch }) {
    let payload = {
      msg: 'action pass val to mutation increment'
    }
    commit('INCREMENT', payload)
  },
  changeMsg({ commit, dispatch }) {
    let payload = {
      msg: 'action pass val to mutation increment'
    }
    commit('CHANGE_MSG', payload)
  },
  async changeUserInfo({ commit, dispatch }) {
    let payload = {
      name: 'mary',
      age: 19,
      sex: "female",
      height: "160"
    }
    await dispatch('changeMsg')
    commit('CHANGE_USER_INFO', payload)
  }
}
