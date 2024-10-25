import { Meta, StoryObj } from '@storybook/vue3'
import { action } from '@storybook/addon-actions'
import TextInput from './TextInput.vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import { ref } from 'vue'

type TextInputPropsAndCustomArgs = ComponentProps<typeof TextInput> & {
  disabled: boolean
  placeholder: string
}

const meta: Meta<TextInputPropsAndCustomArgs> = {
  title: 'TextInput',
  component: TextInput,
  args: {
    multiline: false,
    error: false,
    disabled: false,
    placeholder: 'placeholder',
    autoExpand: false,
    baseTextareaHeight: 56,
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'date'],
      defaultValue: 'text',
    },
  },
  render: (args) => ({
    components: { TextInput },
    setup() {
      const value = ref('')
      const onFocus = action('focus')
      return { args, value, onFocus }
    },
    template: `
      <TextInput v-bind="args" v-model="value" @focus="onFocus"/>
    `,
  }),
}

export default meta

type Story = StoryObj<TextInputPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
}

export const Multiline: Story = {
  name: 'multiline',
  args: {
    multiline: true,
  },
}
