<template>
  <label class="check-box" :class="{ 'is-disabled': disabled }">
    <input
      :checked="value"
      @change="e => onInput(e.target.checked)"
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
    const onInput = (value: boolean) => context.emit('input', value)
    return {
      context,
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
  left: 3px;
  transition: all 0.3s ease;
  color: $lapras-blue;
}
</style>
