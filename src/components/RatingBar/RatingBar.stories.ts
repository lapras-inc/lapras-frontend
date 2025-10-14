import type { Meta, StoryObj } from '@storybook/vue3-vite'
import RatingBar from './RatingBar.vue'

const meta: Meta<typeof RatingBar> = {
  title: 'RatingBar',
  component: RatingBar,
  render: (args) => ({
    components: { RatingBar },
    setup() {
      return { args }
    },
    template: '<RatingBar v-bind="args" />',
  }),
}

export default meta

type Story = StoryObj<typeof RatingBar>

export const Default: Story = {
  name: 'default',
  args: {
    value: 3.5,
  },
}

export const HighScore: Story = {
  name: 'high score',
  args: {
    value: 3.5,
    highThreshold: 3.5,
  },
}

export const CustomColor: Story = {
  name: 'custom color',
  args: {
    value: 3.5,
    barColor: '#58ba0c',
  },
}
