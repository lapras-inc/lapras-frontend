import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Icon from './Icon.vue'
import iconMap from './iconMap'

const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args, iconMap }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); color: #2C2C2C;">
        <div v-for="name in Object.keys(iconMap)" :key="name" style="text-align: center; border: 1px solid #efefef; padding: 12px;">
          <Icon :name="name" style="font-size: 38px;" />
          <div style="font-size: 16px; margin-top: 8px;">{{ name }}</div>
        </div>
      </div>
    `,
  }),
}

export default meta

export type Story = StoryObj<typeof Icon>

export const IconList: Story = {
  name: 'icon list',
}
