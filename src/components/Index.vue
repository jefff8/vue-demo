<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "Index",
  props: {
    title: {
      type: String,
      default: "",
      required: false,
    }
  },
  components: {},
  data() {
    return {
      msg: "Welcome to Your Index",
    };
  },
  beforeCreate() {
  },
  created() {
    console.log("created", this.$props.title)
  },
  beforeMount() {
  },
  mounted() {
  },
  methods: {},
  computed: {},
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
