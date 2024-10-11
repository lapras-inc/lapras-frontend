import type { Meta, StoryObj } from '@storybook/vue3'
import ContentLoader from './ContentLoader.vue'

const meta: Meta<typeof ContentLoader> = {
  title: 'ContentLoader',
  component: ContentLoader,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['PARAGRAPH', 'BULLET_LIST', 'CIRCLE'],
      defaultValue: 'PARAGRAPH',
    },
    lineCount: {
      control: { type: 'number' },
      defaultValue: 5,
    },
    lineHeight: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    randomLineWidth: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
    gap: {
      control: { type: 'number' },
      defaultValue: 0.8,
    },
  },
  render: (args) => ({
    components: { ContentLoader },
    setup() {
      return { args }
    },
    template: `
      <ContentLoader v-bind="args" />`,
  }),
}

export default meta

type Story = StoryObj<typeof ContentLoader>

export const Default: Story = {
  name: 'default',
  args: {
    type: 'PARAGRAPH',
    lineCount: 5,
    lineHeight: 1,
    randomLineWidth: true,
    gap: 0.8,
  },
}
