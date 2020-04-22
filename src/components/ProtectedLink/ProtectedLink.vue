<template>
  <a v-bind="$attrs" :href="_href" :src="_src" :srcset="_srcset" :rel="_rel"
    ><slot></slot
  ></a>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const filterXSSScheme = (attr: string | undefined) => {
  if (!attr) return ''
  if (attr.includes(':') && !attr.match(/^https?:\/\//)) {
    return ''
  }
  return attr
}

type ProtectedLinkProps = {
  href: string | undefined
  src: string | undefined
  srcset: string | undefined
  rel: string | undefined
}

export default defineComponent<ProtectedLinkProps>({
  // rootの属性オーバーライドを防ぐ
  // https://jp.vuejs.org/v2/guide/components-props.html
  inheritAttrs: false,
  props: {
    href: String,
    src: String,
    srcset: String,
    rel: String,
  },
  computed: {
    _href(this: ProtectedLinkProps): string {
      return filterXSSScheme(this.href as string)
    },
    _src(this: ProtectedLinkProps): string {
      return filterXSSScheme(this.src as string)
    },
    _srcset(this: ProtectedLinkProps): string {
      return filterXSSScheme(this.srcset as string)
    },
    _rel(this: ProtectedLinkProps): string {
      return filterXSSScheme(this.rel as string)
    },
  },
})
</script>
