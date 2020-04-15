<template>
  <label class="radio" :class="{ 'is-disabled': disabled }">
    <input
      :checked="value"
      @change="e => onInput(e.target.checked)"
      class="input"
      type="radio"
      v-bind="context.attrs"
    />
    <div class="dot"></div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Icon from '@/components/Icon/Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },
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
  setup(_, context) {
    const onInput = (checked: boolean) => {
      if (checked) {
        context.emit('input', true)
      }
    }
    return {
      context,
      onInput,
    }
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

  &:hover {
    opacity: 0.75;
  }

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
