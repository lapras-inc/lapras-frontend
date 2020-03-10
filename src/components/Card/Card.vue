<template functional>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Card',
  functional: true,
})
</script>

<style lang="scss">
.card {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 #d0d0d0;
}
</style>
