<template>
  <label
    class="toggle-label-set"
    :class="{
      'is-active': isActive,
      'is-button': isButton,
      'is-disabled': disabled,
      'is-flipped': isFlipped,
    }"
  >
    <div class="toggle"><slot name="toggle" /></div>
    <div class="label"><slot name="default" /></div>
  </label>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    isButton: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isFlipped: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.toggle-label-set {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  max-width: fit-content;
  cursor: pointer;

  @include base-hover;

  &.is-button {
    max-width: 100%;
    padding: 12px;
    user-select: none;
    border: 1px solid $line-color;
    border-radius: $corner-r;
    background: rgba(243, 245, 246, 0.6);

    &.is-active {
      border-color: $lapras-blue;
    }
  }

  &.is-disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.is-flipped {
    flex-direction: row-reverse;

    .label {
      margin-right: 10px;
      margin-left: 0;
      text-align: right;
    }
  }
}

.toggle {
  line-height: 1;
}

.label {
  flex: 1;
  margin-left: 10px;
}
</style>
