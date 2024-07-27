import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import ProtectedLink from './ProtectedLink.vue'

type ProtectedLinkPropsAndCustomArgs = ComponentProps<typeof ProtectedLink> & {
  default: string
}

const meta: Meta<ProtectedLinkPropsAndCustomArgs> = {
  title: 'ProtectedLink',
  component: ProtectedLink,
  render: (args) => ({
    components: { ProtectedLink },
    setup() {
      return { args }
    },
    template: '<ProtectedLink v-bind="args">{{ args.default }}</ProtectedLink>',
  }),
}

export default meta

type Story = StoryObj<ProtectedLinkPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
  args: {
    href: '//placehold.jp/150x150.png',
    default: '//placehold.jp/150x150.png',
  },
}

export const Http: Story = {
  name: 'http',
  args: {
    href: 'http://placehold.jp/150x150.png',
    default: 'http://placehold.jp/150x150.png',
  },
}

export const Https: Story = {
  name: 'https',
  args: {
    href: 'https://placehold.jp/150x150.png',
    default: 'https://placehold.jp/150x150.png',
  },
}

export const AbsolutePath: Story = {
  name: 'absolute path',
  args: {
    href: '/example',
    default: '/example',
  },
}

export const RelativePath1: Story = {
  name: 'relative path1',
  args: {
    href: './example',
    default: './example',
  },
}

export const RelativePath2: Story = {
  name: 'relative path2',
  args: {
    href: 'example',
    default: 'example',
  },
}

export const ValidAttrsInherited: Story = {
  name: 'valid attrs inherited',
  args: {
    href: 'https://placehold.jp/150x150.png',
    default: 'https://placehold.jp/150x150.png',
  },
}

export const XssJavascriptScheme: Story = {
  name: 'xss javascript scheme',
  args: {
    href: 'javascript:alert(document.domain)',
    default: 'javascript:alert(document.domain)',
  },
}

export const TargetBlank: Story = {
  name: 'target=_blank',
  args: {
    href: 'https://en.wikipedia.org/wiki/William_Shakespeare',
    target: '_blank',
    rel: 'author',
    default: 'author of Hamlet',
  },
}

export const ForcePermitAnyLink: Story = {
  name: 'force permit any link',
  args: {
    href: 'javascript:alert(document.domain)',
    force: true,
    default: 'javascript:alert(document.domain)',
  },
}
