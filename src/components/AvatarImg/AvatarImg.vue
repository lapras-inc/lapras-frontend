<template>
  <div
    v-bind="context.attrs"
    :style="{ backgroundImage: `url(${src || avatarDefault})` }"
    class="avatar-icon"
    role="img"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const avatarDefault =
  'data:image/svg+xml;charset=utf8,%3Csvg%20height%3D%22200%22%20viewBox%3D%220%200%20200%20200%22%20width%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22m0%200h200v200h-200z%22%20fill%3D%22%23D7D9E3%22%2F%3E%3Cg%20fill%3D%22%23888A93%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2271%22%20r%3D%2253%22%2F%3E%3Cpath%20d%3D%22m179%20200c0-37.555363-35.369505-68-79-68-43.6304952%200-79%2030.444637-79%2068s158%2037.555363%20158%200z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'

export default defineComponent({
  props: {
    src: {
      type: String,
    },
  },
  setup(props, context) {
    return {
      avatarDefault,
      context,
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
