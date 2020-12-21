<template>
  <transition name="fade">
    <div class="modal" ref="modal" v-if="visible" @click="$emit('close')">
      <div
        class="modal-overlay"
        :style="{
          background: filterBackground,
          zIndex,
        }"
      ></div>
      <div
        class="modal-container"
        :style="{
          padding: `${gutter}px`,
          zIndex,
        }"
      >
        <div class="modal-body">
          <div class="close-wrap" :class="{ 'outer-close': outerClose }">
            <p class="close" v-if="hasClose">
              <Icon name="close" alt="閉じる" v-if="outerClose" />
              <i class="icon-cancel" v-else></i>
            </p>
          </div>
          <div
            class="content"
            :class="{ panel }"
            @click="e => e.stopPropagation()"
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
    // バツボタンをダイアログの外に表示するか否か
    // 基本的に SCOUT は true、LAPRAS は false
    outerClose: {
      type: Boolean,
      default: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.modal-container {
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.close-wrap {
  position: absolute;
  top: 33px;
  right: 33px;
  text-align: right;

  &.outer-close {
    position: relative;
    top: auto;
    right: auto;
    margin: auto auto 3px;

    .close {
      color: $white;
      font-size: 18px;
    }
  }
}

.close {
  color: #c8cdd5;
  line-height: 1;
  cursor: pointer;
  display: inline-block;
  margin: 0;
  font-size: 1.2rem;
  font-weght: bold;

  @include base-hover;
}

.icon-cancel::before {
  content: '\e930';
}

.panel {
  overflow: hidden;
  border-radius: $corner-r;
  background: $white;
  width: calc(100vw - 40px);
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: auto;
    width: auto;
    max-width: 850px;
    padding-top: 20px;
  }
}
</style>
