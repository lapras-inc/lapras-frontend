<template>
  <div
    :style="{ backgroundImage }"
    class="avatar-icon"
    role="img"
    v-bind="context.attrs"
    v-on="context.listeners"
  ></div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import avatarDefault from '@/assets/images/avatar_default.svg'

export default defineComponent({
  props: {
    src: {
      type: String,
    },
    defaultSrc: {
      type: String,
      default: avatarDefault,
    },
  },
  setup(props, context) {
    return {
      context,
      backgroundImage: `url(${props.src || props.defaultSrc})`,
    }
  },
})
</script>

<style lang="scss" scoped>
.avatar-icon {
  position: relative;
  overflow: hidden;
  min-width: 10px;
  border-radius: 50%;
  background-position: center center;
  background-size: cover;

  &::before {
    display: block;
    padding-top: 100%;
    content: '';
  }
}
</style>
