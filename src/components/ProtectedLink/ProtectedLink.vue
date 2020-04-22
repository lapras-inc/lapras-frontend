<template>
  <div>
    <a v-bind="$attrs" :href="_href"><slot></slot></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

const filterXSSScheme = (attr: string | undefined): string | undefined => {
  if (!attr) return undefined
  if (attr.includes(':') && !attr.match(/^https?:\/\//)) {
    return undefined
  }
  return attr
}

type ProtectedLinkProps = {
  href: string | undefined
}

export default defineComponent<ProtectedLinkProps>({
  // rootの属性オーバーライドを防ぐ
  // https://jp.vuejs.org/v2/guide/components-props.html
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      validator: value => {
        // validator type safe
        return !!filterXSSScheme(value)
      },
    },
  },
  computed: {
    _href(this: ProtectedLinkProps): string | undefined {
      return filterXSSScheme(this.href as string)
    },
  },
})
</script>
