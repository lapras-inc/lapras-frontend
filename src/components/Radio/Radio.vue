<template>
  <label class="radio" :class="{ 'is-disabled': disabled }">
    <input
      :checked="innerChecked"
      @change="e => onChange(e.target.checked)"
      class="input"
      type="radio"
      v-bind="context.attrs"
    />
    <div class="dot"></div>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import Icon from '@/components/Icon/Icon.vue'

type Props = {
  checked: string | number | boolean
  value: string | number | boolean
  disabled: boolean
}

export default defineComponent<Props>({
  components: {
    Icon,
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: [String, Number, Boolean],
      default: false,
    },
    value: {
      type: [String, Number, Boolean],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const hasValue = props.value !== null

    if (hasValue) {
      const onChange = (checked: boolean) =>
        context.emit('change', checked ? props.value : null)
      const innerChecked = computed(() => props.checked === props.value)
      return { context, innerChecked, onChange }
    }

    const onChange = (checked: boolean) => context.emit('change', checked)
    const innerChecked = props.checked
    return { context, innerChecked, onChange }
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
