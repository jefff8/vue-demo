<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "MyDemo",
  components: {

  },
  data() {
    return {
      msg: "Welcome to Your MyDemo",
    };
  },
  methods: {
    ...mapMutations({ add: "increment", }), // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    created() {
      console.log(this.$store.state)
    },
    addNum: function () {
      this.add();
      console.log(this.countRoot)
      console.log(this.getCount)
    },
  },
  computed: {
    ...mapState(["countRoot"]),
    ...mapGetters(["getCount"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
