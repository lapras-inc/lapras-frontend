import type { Meta, StoryObj } from '@storybook/vue3-vite'
import CheckBox from './CheckBox.vue'

const meta: Meta<typeof CheckBox> = {
  title: 'CheckBox',
  component: CheckBox,
  render: (args) => ({
    components: { CheckBox },
    setup() {
      return { args }
    },
    template: `
      <div>
        <CheckBox v-model="args.modelValue" :disabled="args.disabled" class="additional" />
        <p>{{ args.modelValue ? 'on' : 'off' }}</p>
      </div>
    `,
  }),
}

export default meta

type Story = StoryObj<typeof CheckBox>

export const Default: Story = {
  name: 'default',
  args: {
    modelValue: true,
    disabled: false,
  },
}

export const Disabled: Story = {
  name: 'disabled',
  args: {
    modelValue: true,
    disabled: true,
  },
}
