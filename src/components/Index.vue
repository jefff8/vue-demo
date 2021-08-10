<template>
  <div class="index">
    <div>this is {{ msg }}</div>
    <button @click="childMethod">Index</button>
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
    },
  },
  components: {},
  data() {
    return {
      msg: "Index Component",
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  methods: {
    childMethod() {
      this.$parent.parentMethod("child pass val to parent");
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  margin-top: 50px;
}
</style>
