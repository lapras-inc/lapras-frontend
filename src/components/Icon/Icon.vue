<template functional>
  <i class="icon" v-bind="data.attrs" v-on="listeners">
    {{ props.icons[props.name] }}
  </i>
</template>

<script lang="ts">
import Vue from 'vue'
import icons from './iconMap'

export default Vue.extend({
  name: 'Icon',
  functional: true,
  props: {
    name: {
      type: String,
      required: true,
    },
    icons: {
      type: Object,
      default: () => icons,
    },
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
  font-family: 'scouty-icon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
}
</style>
