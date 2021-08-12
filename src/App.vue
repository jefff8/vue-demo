<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
console.log(process.env)
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
}
</style>
