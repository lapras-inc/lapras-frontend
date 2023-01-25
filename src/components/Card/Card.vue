<template>
  <div v-bind="$attrs" :class="`is-skin-${skin}`" class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    skin: {
      type: String as PropType<'default' | 'background' | 'background-line'>,
      default: 'default',
    },
  },
})
</script>

<style lang="scss">
.card {
  &.is-skin-default {
    background: $white;
    border-radius: $corner-r-l;
    box-shadow: 0 0 4px 0 #d0d0d0;
  }
  &.is-skin-background {
    border-radius: $corner-r;
    background: $background;
  }
  &.is-skin-background-line {
    border-radius: $corner-r;
    background: $background;
    border: 1px solid $line-color;
  }
}
</style>
