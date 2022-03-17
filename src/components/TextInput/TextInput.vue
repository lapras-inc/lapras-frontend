<template>
  <textarea
    :value="value"
    class="text-input is-multi-line"
    :class="{ 'has-error': error }"
    v-bind="context.attrs"
    v-if="multiline"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    ref="textarea"
  ></textarea>
  <input
    :value="value"
    class="text-input is-single-line"
    :class="{ 'has-error': error }"
    type="text"
    v-bind="context.attrs"
    @input="$emit('input', $event.target.value)"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    v-else
  />
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  watch,
  toRefs,
  nextTick,
} from 'vue-demi'

export default defineComponent({
  props: {
    multiline: {
      type: Boolean,
      default: false,
    },
    value: {
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

    // eslint-disable-next-line
    console.log("ほほほほほｈ")

    const { value } = toRefs(props)
    watch(
      value,
      async () => {
        await nextTick()
        resizeTextareaIfAutoExpand()
      },
      { immediate: true }
    )

    return {
      context,
      textarea,
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
  color: $light-gray;
}
</style>
