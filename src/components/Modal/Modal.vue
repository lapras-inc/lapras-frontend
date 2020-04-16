<template>
  <transition name="fade">
    <div
      class="modal"
      ref="modal"
      v-if="visible"
      @click="$emit('close')"
      :style="{
        background: filterBackground,
        zIndex,
      }"
    >
      <div class="modal-container" :style="{ padding: `${gutter}px` }">
        <div class="modal-body">
          <div class="close-wrap">
            <p class="close" v-if="hasClose">
              <Icon name="cross" alt="閉じる" />
            </p>
          </div>
          <div
            class="content"
            :class="{ panel }"
            @click.prevent="e => e.stopPropagation()"
          >
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import Icon from '@/components/Icon/Icon.vue'

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    filterBackground: {
      type: String,
      default: 'rgba(0, 48, 137, 0.14)',
    },
    hasClose: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: true,
    },
    panel: {
      type: Boolean,
      default: true,
    },
    gutter: {
      type: Number,
      default: 20,
    },
    zIndex: {
      type: Number,
      default: 10,
    },
  },
  watch: {
    visible: {
      immediate: true,
      handler(visible) {
        const $el = document.body
        if (visible) {
          return disableBodyScroll($el)
        }
        clearAllBodyScrollLocks()
      },
    },
  },
})
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-container {
  display: table;
  box-sizing: border-box;
  min-height: 100vh;
  margin: 0 auto;
}

.modal-body {
  display: table-cell;
  vertical-align: middle;
}

.close-wrap {
  text-align: right;
  margin-bottom: 10px;
}

.close {
  color: $white;
  line-height: 1;
  cursor: pointer;
  display: inline-block;
  margin: 0;

  &:hover {
    opacity: 0.75;
  }
}

.panel {
  overflow: hidden;
  max-width: 850px;
  border-radius: $corner-r;
  background: $white;
}
</style>
