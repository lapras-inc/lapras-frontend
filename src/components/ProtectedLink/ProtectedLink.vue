<template>
  <a v-bind="$attrs" :href="escapedHref" :rel="formattedRel" :target="target"
    ><slot></slot
  ></a>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

// http://koseki.hatenablog.com/entry/20120212/uricolon
// https://github.com/masatokinugawa/filterbypass/wiki/Browser's-XSS-Filter-Bypass-Cheat-Sheet
// http://nootropic.me/blog/blog/2015/01/30/javascript%E3%82%B9%E3%82%AD%E3%83%BC%E3%83%A0%E3%81%AF%E3%81%82%E3%81%8D%E3%82%89%E3%82%81%E3%81%AA%E3%81%84/
// 上記を方針にhttp:, https以外のスキームの利用の禁止する
// クエリパラメータとして:がvalueにある場合は、forceをつけることで許容する
const filterXSSScheme = (attr: string | undefined): string | undefined => {
  if (!attr) return undefined
  if (attr.includes(':') && !attr.match(/^https?:\/\//i)) {
    return undefined
  }
  return attr
}

type ProtectedLinkProps = {
  href: string | undefined
  force: boolean
  rel: string | undefined
  target: string | undefined
}

export default defineComponent({
  // root属性によるcomputedのオーバーライドを防ぐ
  // https://jp.vuejs.org/v2/guide/components-props.html
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      validator(value: string) {
        // validator type safe, output console even if force set
        return !!filterXSSScheme(value)
      },
    },
    force: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
    },
    rel: {
      type: String,
    },
  },
  setup(props: ProtectedLinkProps) {
    const escapedHref = computed<string | undefined>(() => {
      if (props.force) return props.href
      return filterXSSScheme(props.href)
    })
    const formattedRel = computed<string | undefined>(() => {
      if (props.target === '_blank') {
        return `noopener ${props.rel || ''}`.replace(/\s$/, '')
      }
      return props.rel
    })

    return {
      escapedHref,
      formattedRel,
    }
  },
})
</script>
