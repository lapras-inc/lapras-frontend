<template>
  <label class="check-box" :class="{ 'is-disabled': disabled }">
    <input
      :checked="innerChecked"
      @change="e => onChange(e.target.checked)"
      class="input"
      type="checkbox"
      v-bind="context.attrs"
    />
    <div class="icon-wrap">
      <Icon name="check" />
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import Icon from '@/components/Icon/Icon.vue'

type Props = {
  checked: string | number | boolean | string[]
  value: string | number | boolean
  disabled: boolean
}

export default defineComponent<Props>({
  components: {
    Icon,
  },
  props: {
    checked: {
      type: [String, Number, Boolean, Array],
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
  model: {
    prop: 'checked',
    event: 'change',
  },
  setup(props, context) {
    const isModelArray = Array.isArray(props.checked)
    const isModelSingle = props.value !== null

    if (isModelArray) {
      // modelが配列だったとき
      const innerChecked = computed(() =>
        (props.checked as string[]).includes(props.value)
      )
      const onChange = (checked: boolean) => {
        const activeValues: string[] = props.checked
        if (checked) {
          context.emit('change', activeValues.concat([props.value]))
        } else {
          context.emit(
            'change',
            activeValues.filter(value => value !== props.value)
          )
        }
      }
      return { innerChecked, context, onChange }
    } else if (isModelSingle) {
      // modelが配列ではなく、valueが設定されているとき
      const innerChecked = computed(() => props.value === props.checked)
      const onChange = (checked: boolean) =>
        context.emit('change', checked ? props.value : null)
      return { context, innerChecked, onChange }
    }

    const innerChecked = props.checked
    const onChange = (checked: boolean) => context.emit('change', checked)
    return { context, innerChecked, onChange }
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
