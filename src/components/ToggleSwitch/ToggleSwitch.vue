<template>
  <label class="toggle-switch">
    <input
      :checked="value"
      :disabled="disabled"
      @change="onInput"
      class="checkbox"
      type="checkbox"
      v-bind="context.attrs"
    />
    <div class="switch-base" :class="{ 'is-disabled': disabled }">
      <div class="toggle"></div>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    input: null,
  },
  setup(props, context) {
    const emitInput = (value: boolean) => context.emit('input', value)
    const onInput = (e: Event) =>
      emitInput((e.target as HTMLInputElement).checked)
    return {
      onInput,
      context,
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
  background: $white;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
}

.checkbox {
  display: none;
}

.checkbox:checked + .switch-base {
  background: $dark-gray;

  .toggle {
    left: 22px;
  }
}
</style>
