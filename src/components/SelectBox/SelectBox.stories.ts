import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import SelectBox from './SelectBox.vue'

type SelectBoxPropsAndCustomArgs = ComponentProps<typeof SelectBox> & {
  vale: string
}

const meta: Meta<SelectBoxPropsAndCustomArgs> = {
  title: 'SelectBox',
  component: SelectBox,
  render: (args) => ({
    components: { SelectBox },
    setup() {
      return { args }
    },
    template: `
      <div>
        <SelectBox :options="args.options" :placeholder="args.placeholder" />
      </div>
    `,
  }),
}

export default meta

type Story = StoryObj<SelectBoxPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
  args: {
    options: [
      {
        value: 'hoge key',
        label: 'hoge label',
      },
      {
        value: 'fuga key',
        label: 'fuga label',
      },
    ],
    placeholder: 'placeholder',
  },
}
