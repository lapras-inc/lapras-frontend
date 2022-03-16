<template>
  <component
    :is="tag"
    class="enhanced-icon"
    v-bind="context.attrs"
    v-on="context.listeners"
  >
    <svg class="svg" viewBox="0 0 40 40">
      <defs>
        <circle id="path1" cx="20" cy="20" r="20"></circle>
        <mask
          id="mask-2"
          maskContentUnits="userSpaceOnUse"
          maskUnits="objectBoundingBox"
          x="0"
          y="0"
          width="40"
          height="40"
          fill="white"
        >
          <use xlink:href="#path1"></use>
        </mask>
      </defs>
      <g
        id="Artboard"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="svg">
          <use
            id="Oval"
            stroke="#012F89"
            mask="url(#mask-2)"
            stroke-width="2"
            stroke-dasharray="2.2,2.2"
            xlink:href="#path1"
          ></use>
          <path
            class="inner-circle"
            d="M20,40 C31.045695,40 40,31.045695 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C0,31.045695 8.954305,40 20,40 Z"
            id="Oval"
            fill="#012F89"
          ></path>
        </g>
      </g>
    </svg>
    <p class="icon-wrap"><slot /></p>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'button',
    },
  },
  setup(_, context) {
    return {
      context,
    }
  },
})
</script>

<style lang="scss" scoped>
.enhanced-icon {
  position: relative;
  cursor: pointer;
  user-select: none;
  outline: 0;
  border: 0;
  margin: 0;
  width: 100%;
  padding: 0;
  display: block;
  min-width: 20px;

  @include base-hover;
}

.svg {
  width: 100%;
  vertical-align: middle;
}

.icon-wrap {
  font-size: 12px;
  line-height: 1;
  position: absolute;
  top: calc(50% - 0.5em);
  right: 0;
  left: 0;
  text-align: center;
  color: $white;
  margin: 0;
}

@keyframes scaleAnim {
  from {
    transform: scale(0.7);
  }

  to {
    transform: scale(0.85);
  }
}

.inner-circle {
  transform-origin: center center;
  animation: scaleAnim 0.8s ease infinite alternate;
}
</style>
