export default {
  increment(state, payload) {
    console.log('mutation increment')
    console.log({payload})
    state.countRoot++
  },
  // 使用常量替代 Mutation 事件类型
  ['SOME_MUTATION'] (state, payload) {
    console.log('SOME_MUTATION')
  },
}
