<template>
  <label class="radio" :class="{ 'is-disabled': disabled }">
    <input
      v-bind="$attrs"
      :checked="modelValue"
      @change="onInput"
      class="input"
      type="radio"
    />
    <div class="dot"></div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  setup(_, context) {
    const emitInput = (checked: boolean) => {
      if (checked) {
        context.emit('update:modelValue', true)
      }
    }
    const onInput = (e: Event) =>
      emitInput((e.target as HTMLInputElement).checked)
    return {
      onInput,
    }
  },
})
</script>

<style lang="scss" scoped>
.radio {
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 1px solid $line-color;
  border-radius: 50%;
  background: $black-000;
  display: block;
  cursor: pointer;

  @include base-hover;

  &.is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

.input {
  display: none;

  &:not(:checked) + .dot {
    opacity: 0;
    transform: scale(0.4);
  }
}

.dot {
  position: absolute;
  top: calc(50% - 5px);
  left: calc(50% - 5px);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transition: all 0.2s ease;
  background: $lapras-blue;
  display: block;
}
</style>
