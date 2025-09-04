import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Card from './Card.vue'

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  render: (args) => ({
    components: { Card },
    setup() {
      return { args }
    },
    template:
      '<Card :skin="args.skin">There is always light<br>behind the clouds.</Card>',
  }),
}

export default meta

type Story = StoryObj<typeof Card>

export const SkinDefault: Story = {
  name: 'skin: default',
  args: {
    skin: 'default',
  },
}

export const SkinBackground: Story = {
  name: 'skin: background',
  args: {
    skin: 'background',
  },
}

export const SkinBackgroundLine: Story = {
  name: 'skin: background line',
  args: {
    skin: 'background-line',
  },
}
