<template>
  <span class="tooltip">
    <span class="trigger" ref="trigger" @mouseenter="hoverEvent">
      <slot name="trigger" /><Icon name="info" v-if="!context.slots.trigger" />
    </span>
    <div class="container" ref="container">
      <div
        class="body"
        :class="{ 'has-skin': !skeleton }"
        :style="{
          maxWidth: `${maxWidth}px`,
        }"
      >
        <slot name="default" />
      </div>
    </div>
  </span>
</template>

<script lang="ts">
import {
  createPopper,
  Options as PopperOptions,
  Instance as PopperInstance,
} from '@popperjs/core'
import { defineComponent, PropType, ref } from 'vue'
import Icon from '../Icon/Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    options: {
      type: Object as PropType<Partial<PopperOptions>>,
      default: () => ({}),
    },
    skeleton: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: Number,
      default: 320,
    },
  },
  setup(props, context) {
    const trigger = ref<HTMLElement | null>(null)
    const container = ref<HTMLElement | null>(null)
    let popper: PopperInstance

    const hoverEvent = () => {
      if (!trigger.value || !container.value) {
        return
      }

      if (popper) {
        popper.destroy()
      }

      popper = createPopper(trigger.value, container.value, {
        placement: 'top',
        ...props.options,
      })
    }

    return { context, hoverEvent, trigger, container }
  },
})
</script>

<style lang="scss" scoped>
.tooltip {
  display: inline-block;
}

.trigger {
  display: inline-block;

  @include base-hover;

  &:not(:hover) + .container:not(:hover) {
    visibility: collapse;
    opacity: 0;
  }
}

.container {
  position: absolute;
  width: fit-content;
}

.body {
  &.has-skin {
    font-size: 12px;
    padding: 1em;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    color: $white;
    background: $text-base;
  }
}
</style>
