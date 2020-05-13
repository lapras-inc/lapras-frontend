<template>
  <div class="score-bar" v-bind="context.attrs" v-on="context.listeners">
    <div
      class="inner"
      :style="{
        width: `${(value / max) * 100}%`,
        background: value >= highThreshold ? highBarColor : barColor,
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    max: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      default: 0,
    },
    barColor: {
      type: String,
      default: 'linear-gradient(90deg, #171c60 0%, #009ee8 100%)',
    },
    highThreshold: {
      type: Number,
      default: Infinity,
    },
    highBarColor: {
      type: String,
      default: '#ff5a5f',
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
.score-bar {
  background: $ultra-light-gray;
}

@keyframes innerAnim {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}

.inner {
  height: 4px;
  animation: innerAnim 1.2s ease 0s forwards;
  transform-origin: left top;
}
</style>
