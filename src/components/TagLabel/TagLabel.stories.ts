import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import TagLabel from './TagLabel.vue'
import Icon from '@/components/Icon/Icon.vue'

type TagLabelPropsAndCustomArgs = ComponentProps<typeof TagLabel> & {
  defaultSlot: string
  level: string
  subLabel: string | null
  icon: string | null
}

const meta: Meta<TagLabelPropsAndCustomArgs> = {
  title: 'TagLabel',
  component: TagLabel,
}

export default meta

type Story = StoryObj<TagLabelPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
  args: {
    defaultSlot: 'label',
    background: undefined,
    color: undefined,
  },
  render: (args) => ({
    components: { TagLabel },
    setup() {
      return { args }
    },
    template: `
      <TagLabel :background="args.background" :color="args.color">
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    `,
  }),
}

export const Background: Story = {
  name: 'background',
  args: {
    defaultSlot: 'OSS',
    background: '#003089',
    color: '#fff',
  },
  render: (args) => ({
    components: { TagLabel },
    setup() {
      return { args }
    },
    template: `
      <TagLabel :background="args.background" :color="args.color">
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    `,
  }),
}

export const HasLevel: Story = {
  name: 'has level',
  args: {
    defaultSlot: 'Python',
    background: undefined,
    color: undefined,
    level: '5',
    subLabel: '5',
  },
  render: (args) => ({
    components: { TagLabel },
    setup() {
      return { args }
    },
    template: `
      <TagLabel :background="args.background" :color="args.color" :level="args.level">
        <template #subLabel>{{ args.subLabel }}</template>
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    `,
  }),
}

export const HasIcon: Story = {
  name: 'has icon',
  args: {
    defaultSlot: 'Python',
    background: undefined,
    color: undefined,
    level: '5',
    icon: 'eye-close',
  },
  render: (args) => ({
    components: { TagLabel, Icon },
    setup() {
      return { args }
    },
    template: `
      <TagLabel :background="args.background" :color="args.color" :level="args.level">
        <template #subLabel>
          <Icon :name="args.icon" />
        </template>
        <template #default>{{ args.defaultSlot }}</template>
      </TagLabel>
    `,
  }),
}
