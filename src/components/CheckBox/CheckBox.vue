<template>
  <label class="check-box" :class="{ 'is-disabled': disabled }">
    <input
      ref="inputRef"
      v-bind="$attrs"
      :checked="modelValue"
      :disabled="disabled"
      @change="onInput"
      class="input"
      type="checkbox"
    />
    <div
      class="icon-wrap"
      :class="{
        'is-checked': modelValue && !indeterminate,
        'is-indeterminate': indeterminate,
      }"
    >
      <Icon :name="iconName" />
    </div>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
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
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    'update:modelValue': null,
    'update:indeterminate': null,
  },
  setup(props, context) {
    const inputRef = ref<HTMLInputElement>()

    const emitInput = (value: boolean) =>
      context.emit('update:modelValue', value)

    const onInput = (e: Event) => {
      const target = e.target as HTMLInputElement

      // indeterminate状態からクリックされた場合は、indeterminateをfalseにして、必ずチェック状態にする
      if (props.indeterminate) {
        context.emit('update:indeterminate', false)
        if (inputRef.value) {
          inputRef.value.checked = true
        }
      }

      emitInput(target.checked)
    }

    const iconName = computed(() => (props.indeterminate ? 'minus' : 'check'))

    onMounted(() => {
      if (inputRef.value) inputRef.value.indeterminate = props.indeterminate
    })

    watch(
      () => props.indeterminate,
      (value) => {
        if (inputRef.value) inputRef.value.indeterminate = value
      }
    )

    return {
      inputRef,
      onInput,
      iconName,
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
  background: $black-000;
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
}

.icon-wrap {
  line-height: 1;
  font-size: 15px;
  position: absolute;
  top: -2px;
  left: 2px;
  transition:
    opacity 0.3s ease,
    transform 0.3s;
  color: $lapras-blue;
  transform: translateY(-5px);
  opacity: 0;
}

.icon-wrap--visible {
  transform: translateY(0);
  opacity: 1;
}

.icon-wrap.is-checked,
.icon-wrap.is-indeterminate {
  @extend .icon-wrap--visible;
}

.icon-wrap.is-indeterminate {
  top: 0;
  left: 0;
}
</style>
