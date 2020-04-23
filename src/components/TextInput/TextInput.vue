<template>
  <textarea
    :value="value"
    @input="e => onInput(e.target.value)"
    class="text-input is-multi-line"
    :class="{ 'has-error': error }"
    v-bind="context.attrs"
    v-if="multiline"
  ></textarea>
  <input
    :value="value"
    @input="e => onInput(e.target.value)"
    class="text-input is-single-line"
    :class="{ 'has-error': error }"
    type="text"
    v-bind="context.attrs"
    v-else
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

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
  },
  setup(_, context) {
    const onInput = (value: string) => context.emit('input', value)
    return {
      context,
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
  color: $light-gray;
}
</style>
