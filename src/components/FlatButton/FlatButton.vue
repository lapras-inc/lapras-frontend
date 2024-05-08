<template>
  <component
    v-bind="$attrs"
    :class="[`skin-${skin}`, `size-${size}`, enhanced && 'is-enhanced']"
    :disabled="disabled || undefined"
    :is="tag"
    class="flat-button"
  >
    <div class="icon-wrap is-left" v-if="$slots.leftIcon">
      <slot name="leftIcon" />
    </div>
    <div class="body"><slot /></div>
    <div class="icon-wrap is-right" v-if="$slots.rightIcon">
      <slot name="rightIcon" />
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Icon from '@/components/Icon/Icon.vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    Icon,
  },
  props: {
    skin: {
      type: String as PropType<
        | 'important'
        | 'primary'
        | 'primary-line'
        | 'secondary'
        | 'tertiary'
        | 'muted'
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
      default: undefined,
    },
    enhanced: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'button',
    },
  },
})
</script>

<style lang="scss" scoped>
@keyframes blink {
  0% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  85% {
    opacity: 0.8;
  }

  90% {
    opacity: 1;
  }

  95% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
}

.flat-button {
  font: inherit;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0 0.8em;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  outline: 0;

  @include base-hover;

  &.skin-important {
    color: $white;
    background: $green;
  }

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
    font-size: 20px;
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

  &:not(:hover).is-enhanced {
    animation-duration: 2s;
    animation-name: blink;
    animation-iteration-count: infinite;
  }
}

.body {
  text-align: center;
  flex-grow: 1;
}

.icon-wrap {
  &.is-left {
    text-align: left;
    margin-right: 0.5em;
  }

  &.is-right {
    text-align: right;
    margin-left: 0.5em;
  }
}
</style>
