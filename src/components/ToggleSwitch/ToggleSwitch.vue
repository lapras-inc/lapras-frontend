<template>
  <label class="toggle-switch">
    <input
      :checked="value"
      :disabled="disabled"
      @change="e => onInput(e.target.checked)"
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
import { defineComponent } from '@vue/composition-api'

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
  setup(props, context) {
    const onInput = (value: string) => context.emit('input', value)
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

.label {
  font-size: 12px;
  margin-right: 8px;
  text-align: right;
}

.switch-base {
  position: relative;
  width: 40px;
  height: 20px;
  cursor: pointer;
  transition: background 0.5s ease;
  border-radius: 10px;
  background: $line-color;

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
