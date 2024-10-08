<template>
  <label class="toggle-switch">
    <input
      v-bind="$attrs"
      :checked="modelValue"
      :disabled="disabled || undefined"
      @change="onInput"
      class="checkbox"
      type="checkbox"
    />
    <div class="switch-base" :class="{ 'is-disabled': disabled }">
      <div class="toggle"></div>
    </div>
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
      default: undefined,
    },
  },
  emits: {
    'update:modelValue': null,
  },
  setup(props, context) {
    const emitInput = (value: boolean) =>
      context.emit('update:modelValue', value)
    const onInput = (e: Event) =>
      emitInput((e.target as HTMLInputElement).checked)

    return {
      onInput,
    }
  },
})
</script>

<style lang="scss" scoped>
.toggle-switch {
  display: inline-block;
}

.switch-base {
  position: relative;
  width: 40px;
  height: 20px;
  cursor: pointer;
  transition: background 0.5s ease;
  border-radius: 10px;
  background: $line-color;

  @include base-hover;

  &.is-disabled {
    opacity: 0.5;
  }
}

.toggle {
  position: absolute;
  top: 3px;
  left: 3px;
  display: block;
  width: 14px;
  height: 14px;
  transition: left 0.2s ease;
  border-radius: 7px;
  background: $black-000;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
}

.checkbox {
  display: none;
}

.checkbox:checked + .switch-base {
  background: $black-700;

  .toggle {
    left: 22px;
  }
}
</style>
