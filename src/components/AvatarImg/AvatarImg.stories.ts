import type { Meta, StoryObj } from '@storybook/vue3'
import AvatarImg from './AvatarImg.vue'

const meta: Meta<typeof AvatarImg> = {
  title: 'AvatarImg',
  component: AvatarImg,
  render: (args) => ({
    components: { AvatarImg },
    setup() {
      return { args }
    },
    template: '<AvatarImg :src="args.src" style="width: 50px"/>',
  }),
}

export default meta

type Story = StoryObj<typeof AvatarImg>

export const Default: Story = {
  name: 'default',
  args: {
    src: '//placehold.jp/50x50.png',
  },
}

export const NoImage: Story = {
  name: 'no image',
  args: {
    src: '',
  },
}
