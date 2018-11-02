<template lang="pug">
  div.home
    span misaka is here to help.
</template>
<style lang="stylus">
  .home
    display flex
    align-items center
    justify-content center
</style>
<script lang="ts">
// @ is an alias to /src
import Vue from "vue";

export default Vue.extend({
  name: "home",
  components: {
  },
});
</script>
