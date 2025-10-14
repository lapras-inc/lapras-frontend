import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ComponentProps } from 'vue-component-type-helpers'
import ToggleSwitch from './ToggleSwitch.vue'
import { ref } from 'vue'

type ToggleSwitchPropsAndCustomArgs = ComponentProps<typeof ToggleSwitch> & {
  value: boolean
}

const meta: Meta<ToggleSwitchPropsAndCustomArgs> = {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const value = ref(args.value)
      return { args, value }
    },
    template: `
      <div>
        <ToggleSwitch v-model="value" :disabled="args.disabled" />
        <p>{{ value ? 'on' : 'off' }}</p>
      </div>
    `,
  }),
}

export default meta

type Story = StoryObj<ToggleSwitchPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
  args: {
    value: false,
    disabled: false,
  },
}

export const HasLabel: Story = {
  name: 'has label',
  args: {
    value: false,
    disabled: true,
  },
}
