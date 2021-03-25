<template>
  <component
    :class="[`skin-${skin}`, `size-${size}`]"
    :disabled="disabled"
    :is="tag"
    class="flat-button"
    v-bind="context.attrs"
    v-on="context.listeners"
  >
    <div
      class="icon-wrap is-left"
      v-if="context.slots.leftIcon || context.slots.rightIcon"
    >
      <slot name="leftIcon" />
    </div>
    <div class="body"><slot /></div>
    <div
      class="icon-wrap is-right"
      v-if="context.slots.leftIcon || context.slots.rightIcon"
    >
      <slot name="rightIcon" />
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Icon from '@/components/Icon/Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    skin: {
      type: String as PropType<
        | 'primary'
        | 'primary-line'
        | 'secondary'
        | 'tertiary'
        | 'muted'
        | 'rainbow'
        | 'disabled'
      >,
      default: 'primary',
    },
    size: {
      type: String as PropType<'xl' | 'l' | 'm' | 's' | 'xs'>,
      default: 'm',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'button',
    },
  },
  setup(props, context) {
    return {
      context,
    }
  },
})
</script>

<style lang="scss" scoped>
.flat-button {
  font: inherit;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0.6em;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  outline: 0;

  @include base-hover;

  &.skin-primary {
    color: $white;
    background: $lapras-sec;
  }

  &.skin-primary-line {
    color: $lapras-sec;
    border: 1px solid;
    background: $white;
  }

  &.skin-secondary {
    color: $white;
    background: $lapras-blue;
  }

  &.skin-tertiary {
    color: $white;
    background: #9eacc2;
  }

  &.skin-muted {
    color: $text-base;
    border: 1px solid $line-color;
    background: $white;
  }

  &:disabled,
  &.skin-disabled {
    pointer-events: none;
    color: $white;
    background: $ultra-light-gray;
  }

  &.size-xl {
    font-size: 16px;
    min-height: 68px;
  }

  &.size-l {
    font-size: 14px;
    min-height: 55px;
  }

  &.size-m {
    font-size: 14px;
    min-height: 44px;
  }

  &.size-s {
    font-size: 12px;
    min-height: 35px;
  }

  &.size-xs {
    font-size: 12px;
    min-height: 28px;
  }

  &.skin-rainbow {
    background: -webkit-linear-gradient(left, red, violet);
  }
}

.body {
  text-align: center;
  flex-grow: 1;
}

.icon-wrap {
  min-width: 2em;

  &.is-left {
    text-align: left;
  }

  &.is-right {
    text-align: right;
  }
}
</style>
