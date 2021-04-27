<template>
  <a v-bind="$attrs" :href="_href" :rel="_rel" :target="target"
    ><slot></slot
  ></a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

// http://koseki.hatenablog.com/entry/20120212/uricolon
// https://github.com/masatokinugawa/filterbypass/wiki/Browser's-XSS-Filter-Bypass-Cheat-Sheet
// http://nootropic.me/blog/blog/2015/01/30/javascript%E3%82%B9%E3%82%AD%E3%83%BC%E3%83%A0%E3%81%AF%E3%81%82%E3%81%8D%E3%82%89%E3%82%81%E3%81%AA%E3%81%84/
// 上記を方針にhttp:, https以外のスキームの利用の禁止する
// クエリパラメータとして:がvalueにある場合は、forceをつけることで許容する
const filterXSSScheme = (attr: string | undefined): string | undefined => {
  if (!attr) return undefined
  if (attr.includes(':') && !attr.match(/^https?:\/\//)) {
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

export default defineComponent<ProtectedLinkProps>({
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
  computed: {
    _href(this: ProtectedLinkProps): string | undefined {
      if (this.force) return this.href
      return filterXSSScheme(this.href as string)
    },
    _rel(this: ProtectedLinkProps): string | undefined {
      if (this.target === '_blank') {
        return `noopener ${this.rel || ''}`.replace(/\s$/, '')
      }
      return this.rel
    },
  },
})
</script>
