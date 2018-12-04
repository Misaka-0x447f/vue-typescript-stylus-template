<template lang="pug">
  div.root
    div.container
</template>
<style lang="stylus" scoped>
  // the root element of component cannot be scoped. 
  .container
    
</style>
<script lang="ts">
  import Vue from "vue";
  import say from "@/utils/i18n";

  export default Vue.extend({
    name: "New Component (3) - Copy",
    components: {},
    data: () => {
      return {
        e: say
      };
    }
  });
</script>
