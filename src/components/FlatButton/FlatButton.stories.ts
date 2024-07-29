import type { Meta, StoryObj } from '@storybook/vue3'
import type { ComponentProps } from 'vue-component-type-helpers'
import { action } from '@storybook/addon-actions'
import FlatButton from './FlatButton.vue'
import Icon from '../Icon/Icon.vue'

type FlatButtonPropsAndCustomArgs = ComponentProps<typeof FlatButton> & {
  label: string
  leftIcon?: string
  rightIcon?: string
}
const meta: Meta<FlatButtonPropsAndCustomArgs> = {
  title: 'FlatButton',
  component: FlatButton,
  render: (args) => ({
    components: { FlatButton, Icon },
    setup() {
      return { args, action: action('clicked') }
    },
    template: `
      <FlatButton
        @click="action"
        :skin="args.skin"
        :size="args.size"
        :enhanced="args.enhanced"
      >
        <template #default>{{ args.label }}</template>
        <template v-if="args.leftIcon" #leftIcon>
          <Icon :name="args.leftIcon" />
        </template>
        <template v-if="args.rightIcon" #rightIcon>
          <Icon :name="args.rightIcon" />
        </template>
      </FlatButton>
    `,
  }),
}

export default meta

type Story = StoryObj<FlatButtonPropsAndCustomArgs>

export const Default: Story = {
  name: 'default',
  args: {
    label: 'label',
    skin: undefined,
    size: undefined,
    enhanced: false,
    leftIcon: undefined,
    rightIcon: undefined,
  },
}

export const SkinImportant: Story = {
  name: 'skin: important',
  args: {
    label: 'label',
    skin: 'important',
  },
}

export const SkinPrimary: Story = {
  name: 'skin: primary',
  args: {
    label: 'label',
    skin: 'primary',
  },
}

export const SkinPrimaryLine: Story = {
  name: 'skin: primary line',
  args: {
    label: 'label',
    skin: 'primary-line',
  },
}

export const SkinSecondary: Story = {
  name: 'skin: secondary',
  args: {
    label: 'label',
    skin: 'secondary',
  },
}

export const SkinTertiary: Story = {
  name: 'skin: tertiary',
  args: {
    label: 'label',
    skin: 'tertiary',
  },
}

export const SkinMuted: Story = {
  name: 'skin: muted',
  args: {
    label: 'label',
    skin: 'muted',
  },
}

export const SkinDisabled: Story = {
  name: 'skin: disabled',
  args: {
    label: 'label',
    skin: 'disabled',
  },
}

export const SizeXl: Story = {
  name: 'size: xl',
  args: {
    label: 'label',
    size: 'xl',
  },
}

export const SizeL: Story = {
  name: 'size: l',
  args: {
    label: 'label',
    size: 'l',
  },
}

export const SizeM: Story = {
  name: 'size: m',
  args: {
    label: 'label',
    size: 'm',
  },
}

export const SizeS: Story = {
  name: 'size: s',
  args: {
    label: 'label',
    size: 's',
  },
}

export const SizeXs: Story = {
  name: 'size: xs',
  args: {
    label: 'label',
    size: 'xs',
  },
}

export const HasIcons: Story = {
  name: 'has icons',
  args: {
    label: 'label',
    leftIcon: 'arrow-left',
    rightIcon: 'arrow-right',
  },
}

export const HasLeftIcon: Story = {
  name: 'has left icon',
  args: {
    label: 'label',
    leftIcon: 'arrow-left',
  },
}

export const HasRightIcon: Story = {
  name: 'has right icon',
  args: {
    label: 'label',
    rightIcon: 'arrow-right',
  },
}

export const Inline: Story = {
  name: 'inline',
  args: {
    label: 'Button',
    leftIcon: 'cross',
  },
  render: (args) => ({
    components: { FlatButton, Icon },
    setup() {
      return { args }
    },
    template: `
      <span style="display: inline-block;">
        <FlatButton
          :skin="args.skin"
          :size="args.size"
          :enhanced="args.enhanced"
        >
          <template #default>{{ args.label }}</template>
          <template v-if="args.leftIcon" #leftIcon>
            <Icon :name="args.leftIcon" />
          </template>
          <template v-if="args.rightIcon" #rightIcon>
            <Icon :name="args.rightIcon" />
          </template>
        </FlatButton>
      </span>
    `,
  }),
}

export const Enhanced: Story = {
  name: 'enhanced',
  args: {
    label: 'Button',
    enhanced: true,
  },
}
