import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import Tooltip from './Tooltip.vue'

type TooltipPropsAndCustomArgs = ComponentProps<typeof Tooltip> & {
  defaultSlot: string
  triggerSlot: string | null
  scrollText: string | null
}

const meta: Meta<TooltipPropsAndCustomArgs> = {
  title: 'Tooltip',
  component: Tooltip,
}

export default meta

type Story = StoryObj<TooltipPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
  args: {
    defaultSlot:
      'これは、長い文章です。これは、長い文章です。これは、長い文章です。これは、長い文章です。これは、長い文章です。これは、長い文章です。',
    options: {},
    triggerSlot: null,
    scrollText: null,
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px;">
        <Tooltip :options="args.options">
          <template #default>{{ args.defaultSlot }}</template>
        </Tooltip>
      </div>
    `,
  }),
}

export const CustomTrigger: Story = {
  name: 'custom trigger',
  args: {
    defaultSlot: 'hoge',
    options: { placement: 'left-start' },
    triggerSlot: '//placehold.jp/100x200.png',
    scrollText: 'scroll',
  },
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px;">
        <Tooltip :options="args.options">
          <template #default>{{ args.defaultSlot }}</template>
          <template #trigger>
            <img :src="args.triggerSlot" />
          </template>
        </Tooltip>
        <p style="padding: 30px 0 300px">{{ args.scrollText }}</p>
      </div>
    `,
  }),
}
