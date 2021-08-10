export default {
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  increment (context) {
    console.log('action increment')
    context.commit('increment', 'action pass val to mutation increment')
  }
}