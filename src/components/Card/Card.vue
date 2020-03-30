<template functional>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Card",
  functional: true
});
</script>

<style lang="scss">
.card {
  background: $white;
  border-radius: $corner-r-l;
  box-shadow: 0 0 4px 0 #d0d0d0;
}
</style>
