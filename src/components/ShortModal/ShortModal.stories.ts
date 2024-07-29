import type { Meta, StoryObj } from '@storybook/vue3'
import ShortModal from './ShortModal.vue'

const meta: Meta<typeof ShortModal> = {
  title: 'ShortModal',
  component: ShortModal,
}

export default meta

type Story = StoryObj<typeof ShortModal>

export const Default: Story = {
  args: {
    visible: false,
  },
  render: (args) => ({
    components: {
      ShortModal,
    },
    setup() {
      const action = () => {
        console.log('button pressed!')
      }
      return {
        args,
        action,
      }
    },
    template: `
        <div>
          <button @click="args.visible=true" type="button">SHOW MODAL</button>
          <ShortModal :visible="args.visible" @close="args.visible = false">
            <button @click="action">button</button><br />
            <a href="/">link</a>
          </ShortModal>
        </div>
      `,
  }),
  name: 'default',
}

export const Scroll: Story = {
  args: {
    visible: false,
  },
  render: (args) => ({
    components: {
      ShortModal,
    },
    setup() {
      return {
        args,
        longTextHtml: 'scroll<br />'.repeat(50),
      }
    },
    template: `
        <div>
          <span v-html="longTextHtml"></span>
          <br /><br />
          <button @click="args.visible=true">SHOW MODAL</button>
          <ShortModal :visible="args.visible" @close="args.visible = false">
            <span>short</span>
          </ShortModal>
          <br /><br />
          <span v-html="longTextHtml"></span>
        </div>
      `,
  }),

  name: 'scroll',
}
