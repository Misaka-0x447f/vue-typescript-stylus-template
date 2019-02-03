<template lang="pug">
  div.root
    div.container
      div.big {{e("intro")}}
      div {{e("start")}}
      field(link="http://misaka.org")
</template>
<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    align-items center
    justify-content center
    font-family Consolas
  .big
    font-size 2em
</style>
<script lang="ts">
  // @/ is an alias to /src/
  import Vue from "vue";
  import Author from "@/components/Author.vue";
  import say from "@/utils/i18n";

  export default Vue.extend({
    name: "home",
    components: {
      field: Author
    },
    data: () => {
      return {
        e: say
      };
    }
  });
</script>
