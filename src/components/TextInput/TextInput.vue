<template>
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    class="text-input is-multi-line"
    :class="{ 'has-error': error }"
    v-if="multiline"
    @input="onInput"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    ref="textarea"
  ></textarea>
  <input
    v-bind="$attrs"
    :value="modelValue"
    class="text-input is-single-line"
    :class="{ 'has-error': error }"
    type="text"
    @input="onInput"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    v-else
  />
</template>

<script lang="ts">
import { defineComponent, ref, watch, toRefs, nextTick } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    multiline: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    autoExpand: {
      type: Boolean,
      default: false,
    },
    baseTextareaHeight: {
      type: Number,
      default: 56,
    },
  },
  emits: {
    'update:modelValue': null,
    blur: null,
    focus: null,
  },
  setup(props, context) {
    const textarea = ref<HTMLElement | null>(null)
    const resizeTextareaIfAutoExpand = () => {
      if (textarea.value && props.autoExpand) {
        textarea.value.style.height = ''
        textarea.value.style.height = `${Math.max(
          textarea.value.scrollHeight,
          props.baseTextareaHeight
        )}px`
      }
    }

    const onInput = (e: Event) => {
      context.emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    const { modelValue } = toRefs(props)
    watch(
      modelValue,
      async () => {
        await nextTick()
        resizeTextareaIfAutoExpand()
      },
      { immediate: true }
    )

    return {
      textarea,
      onInput,
    }
  },
})
</script>

<style lang="scss" scoped>
.text-input {
  font: inherit;
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  color: $text-base;
  border: 0;
  outline: 0;

  &.has-error {
    border-color: $red;
  }
}

.is-single-line {
  line-height: 1;
  padding: 7px 2px;
  border-bottom: 1px solid $line-color;
}

.is-multi-line {
  line-height: 1.5;
  padding: 7px 9px;
  border: 1px solid $line-color;
  border-radius: $corner-r;
}

.text-input::placeholder {
  color: $black-400;
}
</style>
