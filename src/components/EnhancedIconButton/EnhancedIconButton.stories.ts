import type { Meta, StoryObj } from '@storybook/vue3'
import EnhancedIconButton from './EnhancedIconButton.vue'
import Icon from '@/components/Icon/Icon.vue'

const meta: Meta<typeof EnhancedIconButton> = {
  title: 'EnhancedIconButton',
  component: EnhancedIconButton,
  render: (args) => ({
    components: { EnhancedIconButton, Icon },
    setup() {
      return { args }
    },
    template: `
      <div style="width: 40px;">
        <EnhancedIconButton>
          <Icon name="plus" />
        </EnhancedIconButton>
      </div>`,
  }),
}

export default meta

type Story = StoryObj<typeof EnhancedIconButton>

export const Default: Story = {
  name: 'default',
}
