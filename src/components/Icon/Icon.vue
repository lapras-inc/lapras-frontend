<template>
  <i v-bind="$attrs" class="icon">{{ iconMap[name] }}</i>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import iconMap from './iconMap'

type IconKey = keyof typeof iconMap

export default defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String as PropType<IconKey>,
      required: true,
    },
  },
  setup(props) {
    return {
      iconMap,
    }
  },
})
</script>

<style lang="scss" scoped>
$font_dir: '../../../fonts';

@font-face {
  font-family: 'scouty-icon';
  src: url('#{$font_dir}/scouty-icon.eot');
  src: url('#{$font_dir}/scouty-icon.eot') format('embedded-opentype'),
    url('#{$font_dir}/scouty-icon.ttf') format('truetype'),
    url('#{$font_dir}/scouty-icon.woff') format('woff'),
    url('#{$font_dir}/scouty-icon.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}

.icon {
  font-family: 'scouty-icon';
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  user-select: none;
}
</style>
