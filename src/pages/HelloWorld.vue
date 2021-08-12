<template>
  <div class="hello">
    <div>this is HelloWorld component</div>
    <template v-for="(item, index) in items">
      <span :key="index"> {{ item }} </span>
    </template>
    <div>use computed countDouble: {{ countDouble }}</div>
    <div>msgRoot: {{ msg }}</div>
    <button @click="addNum">Add +</button>
    <input v-model="inputText" placeholder="please input text" />
    <Index :title="name" />
    <MyDemo />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Index from "../components/Index.vue";
import MyDemo from "../components/MyDemo.vue";

export default {
  name: "HelloWorld",
  components: {
    Index,
    MyDemo,
  },
  data() {
    return {
      name: "hello world component",
      items: ["apple", "banner", "pie"],
      myCount: 1,
      inputText: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    addNum() {
      this.addAction();
      console.log(this.moduleCount);
    },
    parentMethod(param) {
      console.log(`fun call by child & param: ${param}`);
    },
    ...mapMutations({
      increment: "INCREMENT",
      someMutation: "SOME_MUTATION",
    }),
    ...mapActions({
      addAction: "increment",
      changeMsgAction: "changeMsg",
      changeUserInfo: "changeUserInfo",
    }),
  },
  watch: {
    count(newVal, oldVal) {
      console.log(`count watch new: ${newVal}, old: ${oldVal}`);
    },
    countPlus(newVal, oldVal) {
      console.log(`countPlus watch new: ${newVal}, old: ${oldVal}`);
    },
  },
  computed: {
    countDouble: function () {
      return this.count * 2; // 仅读取
    },
    countPlus: {
      // 读取
      get: function () {
        return this.count + 1;
      },
      // 设置
      set: function (val) {
        this.count = val - 1;
      },
    },
    ...mapState(["count", "msg"]),
    ...mapState("countModule", { moduleCount: "count" }),
    ...mapGetters(["getCount"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
