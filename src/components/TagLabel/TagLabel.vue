<template>
  <div
    v-bind="$attrs"
    :style="{ background: background, color: color }"
    class="tag-label"
  >
    <p class="sub" v-if="$slots.subLabel">
      <slot name="subLabel" />
    </p>
    <p class="main" :class="{ 'has-sub-label': $slots.subLabel }">
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    background: {
      type: String,
      default: '#EAEAEA',
    },
    color: {
      type: String,
      default: '#7F7F7F',
    },
  },
})
</script>

<style lang="scss" scoped>
.tag-label {
  font-size: 13px;
  display: flex;
  line-height: 1;
  border-radius: 2px;
  overflow: hidden;
  width: fit-content;
  user-select: none;
}

.sub {
  font-weight: bold;
  color: $white;
  padding: 5px 8px;
  background: $black-600;
  margin: 0;
}

.main {
  flex: 1;
  text-align: center;
  padding: 5px 10px;
  margin: 0;

  &.has-sub-label {
    padding: 5px 7px;
  }
}
</style>
