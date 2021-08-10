<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template v-for="(item, index) in items">
      <span :key="index">{{ item }}</span>
    </template>
    <button @click="addNum">Add +</button>
    <Index :title="name" />
    <MyDemo />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Index from "./Index";
import MyDemo from "./MyDemo";

export default {
  name: "HelloWorld",
  components: {
    Index,
    MyDemo,
  },
  data() {
    return {
      name: "hello world component",
      msg: "Welcome to Your Hello World",
      items: ["1", "2", "3"],
      count: 1,
    };
  },
  created() {},
  mounted() {
    console.log('countDouble', this.countDouble)
    console.log('countPlus get', this.countPlus)
    this.countPlus = 4 // aPlus set
    console.log(this.count)
  },
  watch: {
    count(val, oldVal) {
      console.log(`watch new: ${val}, old: ${oldVal}`);
    },
  },
  methods: {
    addNum: function () {
      this.add("123");
      console.log(this.countRoot);
      console.log(this.getCount);
    },
    ...mapMutations({ add: "increment" }), // 将 `this.add()` 映射为 `this.$store.commit('increment')`
  },
  computed: {
    // 仅读取
    countDouble: function () {
      return this.count * 2;
    },
    // 读取和设置
    countPlus: {
      get: function () {
        return this.count + 1;
      },
      set: function (v) {
        this.count = v - 1;
      },
    },
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
