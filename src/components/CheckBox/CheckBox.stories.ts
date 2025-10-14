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
        <CheckBox v-model="args.modelValue" v-model:indeterminate="args.indeterminate" :disabled="args.disabled" class="additional" />
        <p>modelValue: {{ args.modelValue ? 'on' : 'off' }}</p>
        <p>indeterminate: {{ args.indeterminate }}</p>
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
    indeterminate: false,
  },
}

export const Disabled: Story = {
  name: 'disabled',
  args: {
    modelValue: true,
    disabled: true,
    indeterminate: false,
  },
}

export const Indeterminate: Story = {
  name: 'indeterminate',
  args: {
    modelValue: false,
    disabled: false,
    indeterminate: true,
  },
}
