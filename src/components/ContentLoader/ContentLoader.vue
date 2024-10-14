<template>
  <div
    class="content-loader"
    :style="{
      gap: `${gap}em`,
    }"
  >
    <div
      class="loader-group"
      v-for="line in lines"
      :key="line.id"
      :style="{
        gap: `${lineHeight / 2.5}em`,
      }"
    >
      <div
        v-if="['CIRCLE', 'BULLET_LIST'].includes(type)"
        class="circle"
        :style="{
          width: `${lineHeight}em`,
          height: `${lineHeight}em`,
        }"
      />
      <div
        v-if="['PARAGRAPH', 'BULLET_LIST'].includes(type)"
        class="line"
        :style="{
          maxWidth: `${line.maxWidth}%`,
          height: `${lineHeight}em`,
        }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

defineOptions({
  name: 'ContentLoader',
})

const props = withDefaults(
  defineProps<{
    type?: 'PARAGRAPH' | 'BULLET_LIST' | 'CIRCLE'
    lineCount?: number
    lineHeight?: number
    randomLineWidth?: boolean
    gap?: number
  }>(),
  {
    type: 'PARAGRAPH',
    lineCount: 5,
    lineHeight: 1,
    randomLineWidth: true,
    gap: 0.8,
  }
)

const lines = computed(() => {
  return Array.from({ length: props.lineCount }, (_, i) => ({
    id: i,
    maxWidth: props.randomLineWidth ? 50 + Math.random() * 50 : 100,
  }))
})
</script>

<style lang="scss" scoped>
.content-loader {
  display: flex;
  flex-direction: column;
}

.loader-group {
  display: flex;
}

.line {
  background-color: #ccc;
  animation: pulse 1.5s ease-in-out infinite;
  border-radius: 0.25rem;
  flex-grow: 1;
}

.circle {
  background-color: #ccc;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
