<template>
  <label class="check-box" :class="{ 'is-disabled': disabled }">
    <input
      v-bind="$attrs"
      :checked="modelValue"
      :disabled="disabled"
      @change="onInput"
      class="input"
      type="checkbox"
    />
    <div class="icon-wrap">
      <Icon name="check" />
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '@/components/Icon/Icon.vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    Icon,
  },
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
    const emitInput = (value: boolean) =>
      context.emit('update:modelValue', value)

    const onInput = (e: Event) => {
      emitInput((e.target as HTMLInputElement).checked)
    }

    return {
      onInput,
    }
  },
})
</script>

<style lang="scss" scoped>
.check-box {
  position: relative;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid $line-color;
  border-radius: $corner-r;
  background: $white;
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

  &:not(:checked) + .icon-wrap {
    transform: translateY(-5px);
    opacity: 0;
  }
}

.icon-wrap {
  line-height: 1;
  font-size: 15px;
  position: absolute;
  top: -2px;
  left: 2px;
  transition: all 0.3s ease;
  color: $lapras-blue;
}
</style>
