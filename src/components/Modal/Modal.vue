<template>
  <transition name="fade">
    <div
      class="modal"
      role="dialog"
      aria-modal
      v-if="visible"
      :style="{ zIndex }"
    >
      <div
        class="filter"
        @click="$emit('close')"
        :style="{ background: filterBackground }"
      ></div>
      <div class="modal-container" :style="{ padding: `${gutter}px` }">
        <div class="modal-body">
          <div class="close-wrap" v-if="hasClose">
            <button class="close" aria-label="閉じる" @click="$emit('close')">
              <Icon name="close" />
            </button>
          </div>
          <div class="content" :class="{ panel }">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
  emits: {
    close: null,
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
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.filter {
  grid-row: 1 / 4;
  grid-column: 1 / 4;
}

.modal-container {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}

.close-wrap {
  text-align: right;
  margin-bottom: 3px;
}

.close {
  color: $white;
  line-height: 1;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  font-size: 18px;

  @include base-hover;
}

.panel {
  overflow: hidden;
  max-width: 850px;
  border-radius: $corner-r;
  background: $white;
}

.close {
  background: transparent;
  border: none;
  font: inherit;
  padding: 0;
  appearance: none;

  &:not(:focus-visible) {
    outline: none;
  }
}
</style>
