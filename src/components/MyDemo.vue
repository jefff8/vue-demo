<template>
  <div class="my-demo">
    <div>this is {{ msg }}</div>
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
      msg: "MyDemo Component",
    };
  },
  methods: {
  },
  computed: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-demo {
  margin-top: 50px;
}
</style>
