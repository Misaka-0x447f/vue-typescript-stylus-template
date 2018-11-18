<template lang="pug">
  div.home
    span {{e("intro")}}
</template>
<style lang="stylus">
  .home
    display flex
    align-items center
    justify-content center
</style>
<script lang="ts">
  // @/ is an alias to /src/
  import Vue from "vue";
  import say from "@/utils/i18n";

  export default Vue.extend({
    name: "home",
    data: () => {
      return {
        e: say
      };
    }
  });
</script>
