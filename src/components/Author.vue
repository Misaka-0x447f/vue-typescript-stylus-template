<template lang="pug">
  div.container
    span goto 
    a(:href="link") {{link}}
    span  for more information.
</template>
<style lang="stylus" scoped>
</style>
<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "Misaka",
    props: {
      link: {
        type: String,
        default: "(no link)"
      }
    },
    data: () => {
      return {};
    }
  });
</script>
