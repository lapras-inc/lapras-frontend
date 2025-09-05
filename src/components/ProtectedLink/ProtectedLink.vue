<template>
  <a v-bind="$attrs" :href="escapedHref" :rel="formattedRel" :target="target"
    ><slot></slot
  ></a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// http://koseki.hatenablog.com/entry/20120212/uricolon
// https://github.com/masatokinugawa/filterbypass/wiki/Browser's-XSS-Filter-Bypass-Cheat-Sheet
// 上記を方針にhttp:, https以外のスキームの利用の禁止する
// クエリパラメータとして:がvalueにある場合は、forceをつけることで許容する
const filterXSSScheme = (attr: string | undefined): string | undefined => {
  if (!attr) return undefined

  const isNotHttp = attr.includes(':') && !attr.match(/^https?:\/\//i)
  return isNotHttp ? undefined : attr
}

// root属性によるcomputedのオーバーライドを防ぐ
// https://ja.vuejs.org/guide/components/attrs#disabling-attribute-inheritance
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  href: {
    type: String,
    validator(value: string) {
      if (!value) return true
      if (value.includes(':') && !value.match(/^https?:\/\//i)) {
        return false
      }
      return true
    },
    required: true,
  },
  force: {
    type: Boolean,
    default: false,
  },
  target: {
    type: String,
    default: undefined,
  },
  rel: {
    type: String,
    default: undefined,
  },
})

const escapedHref = computed<string | undefined>(() => {
  return props.force ? props.href : filterXSSScheme(props.href)
})
const formattedRel = computed<string | undefined>(() => {
  if (props.target === '_blank') {
    return `noopener ${props.rel || ''}`.replace(/\s$/, '')
  }
  return props.rel
})
</script>
