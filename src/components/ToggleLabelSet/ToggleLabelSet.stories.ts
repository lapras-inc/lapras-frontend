import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ToggleLabelSet from './ToggleLabelSet.vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import CheckBox from '@/components/CheckBox/CheckBox.vue'
import ToggleSwitch from '@/components/ToggleSwitch/ToggleSwitch.vue'
import { ref } from 'vue'

type ToggleLabelSetPropsAndCustomArgs = ComponentProps<
  typeof ToggleLabelSet
> & {
  value: boolean
  label: string
  toggleComponent: typeof CheckBox | typeof ToggleSwitch
}

const meta: Meta<ToggleLabelSetPropsAndCustomArgs> = {
  title: 'ToggleLabelSet',
  component: ToggleLabelSet,
  render: (args) => ({
    components: { ToggleLabelSet, CheckBox, ToggleSwitch },
    setup() {
      const value = ref(args.value)
      return { args, value }
    },
    template: `
      <div style="width: fit-content;">
        <ToggleLabelSet
          :disabled="args.disabled"
          :isFlipped="args.isFlipped"
          :isButton="args.isButton"
          :isActive="value"
        >
          <template #toggle>
            <component :is="args.toggleComponent" v-model="value" />
          </template>
          <template #default>{{ args.label }}</template>
        </ToggleLabelSet>
      </div>
    `,
  }),
}

export default meta

type Story = StoryObj<ToggleLabelSetPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
  args: {
    value: true,
    label: 'label',
    toggleComponent: CheckBox,
    disabled: false,
    isFlipped: false,
    isButton: false,
  },
}

export const Disabled: Story = {
  name: 'disabled',
  args: {
    value: true,
    label: 'label',
    toggleComponent: CheckBox,
    disabled: true,
    isFlipped: false,
    isButton: false,
  },
}

export const Flipped: Story = {
  name: 'flipped',
  args: {
    value: true,
    label: 'label',
    toggleComponent: ToggleSwitch,
    disabled: false,
    isFlipped: true,
    isButton: false,
  },
}

export const Button: Story = {
  name: 'button',
  args: {
    value: true,
    label: 'label',
    toggleComponent: CheckBox,
    disabled: false,
    isFlipped: false,
    isButton: true,
  },
}
