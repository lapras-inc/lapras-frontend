import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import Radio from './Radio.vue'

type RadioPropsAndCustomArgs = ComponentProps<typeof Radio> & {
  value?: string
}

const meta: Meta<RadioPropsAndCustomArgs> = {
  title: 'Radio',
  component: Radio,
  render: (args) => ({
    components: { Radio },
    setup() {
      return { args }
    },
    template: `
      <div>
        <Radio @update:modelValue="args.value = 'a'" :modelValue="args.value === 'a'" v-bind="args" />
        <Radio @update:modelValue="args.value = 'b'" :modelValue="args.value === 'b'" v-bind="args" />
        <p>{{ args.value }}</p>
      </div>
    `,
  }),
}

export default meta

type Story = StoryObj<RadioPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
  args: {
    value: 'a',
  },
}

export const Disabled: Story = {
  name: 'disabled',
  args: {
    modelValue: false,
    disabled: true,
  },
  render: (args) => ({
    components: { Radio },
    setup() {
      return { args }
    },
    template: `
      <div>
        <Radio v-model="args.modelValue" v-bind="args" />
        <p>disabled</p>
      </div>
    `,
  }),
}
