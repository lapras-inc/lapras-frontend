import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ComponentProps } from 'vue-component-type-helpers'
import FieldGroup from './FieldGroup.vue'
import TextInput from '../TextInput/TextInput.vue'

type FieldGroupPropsAndCustomArgs = ComponentProps<typeof FieldGroup> & {
  error?: boolean
  note: string
}

const meta: Meta<FieldGroupPropsAndCustomArgs> = {
  title: 'FieldGroup',
  component: FieldGroup,
  render: (args) => ({
    components: { FieldGroup, TextInput },
    setup() {
      return { args }
    },
    template: `
      <FieldGroup
        :label="args.label"
        :required="args.required"
        :errorMessage="args.errorMessage"
        :subLabel="args.subLabel"
      >
        <template #default>
          <TextInput :error="args.error" />
        </template>
        <template #note>
          {{ args.note }}
        </template>
      </FieldGroup>`,
  }),
}

export default meta

type Story = StoryObj<FieldGroupPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
  args: {
    label: 'email',
    required: true,
    errorMessage: '',
    subLabel: '',
    error: false,
    note: '',
  },
}

export const HasOptions: Story = {
  name: 'has options',
  args: {
    label: 'email',
    required: false,
    errorMessage: 'invalid email',
    subLabel: 'email',
    error: true,
    note: 'hogehoge',
  },
}
