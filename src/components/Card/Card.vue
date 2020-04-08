<template>
  <div class="card" v-bind="context.attrs" v-on="context.listeners">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup(props, context) {
    return {
      context,
    }
  },
})
</script>

<style lang="scss">
.card {
  background: $white;
  border-radius: $corner-r-l;
  box-shadow: 0 0 4px 0 #d0d0d0;
}
</style>
