<template>
  <div class="select-box">
    <select class="select" :value="value" @change="onInput">
      <option :value="null" v-if="placeholder" v-show="false">{{
        placeholder
      }}</option>
      <option
        :value="option.value"
        v-for="option in options"
        :key="option.value"
        >{{ option.label }}</option
      >
    </select>
    <div class="icon-wrap">
      <Icon name="arrow-down" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Icon from '../Icon/Icon.vue'

export interface SelectBoxOption {
  value: string | number
  label: string
}

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    options: {
      type: Array as PropType<SelectBoxOption[]>,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  setup(_, context) {
    const emitInput = (value: string) => context.emit('input', value)
    const onInput = (e: Event) =>
      emitInput((e.target as HTMLSelectElement).value)
    return {
      context,
      onInput,
    }
  },
})
</script>

<style lang="scss" scoped>
.select-box {
  position: relative;
  color: $lapras-sec;
  border: 1px solid;
  border-radius: 4px;
  background: $white;

  @include base-hover;
}

.select {
  font: inherit;
  font-size: 12px;
  font-weight: bold;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em 2.5em 0.5em 0.5em;
  cursor: pointer;
  color: inherit;
  border: 0;
  outline: 0;
  background: transparent;
  -webkit-appearance: unset;
}

.icon-wrap {
  font-size: 10px;
  line-height: 1;
  position: absolute;
  top: calc(50% - 0.5em);
  right: 1em;
  pointer-events: none;
}
</style>
