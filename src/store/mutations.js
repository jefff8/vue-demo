export default {
  increment (state, payload) {
    console.log({payload})
    state.countRoot++
  }
}