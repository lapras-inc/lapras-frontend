import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from './Modal.vue'

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  name: 'default',
  args: {
    filterBackground: 'rgba(0, 48, 137, 0.14)',
    hasClose: true,
    visible: false,
    panel: true,
    gutter: 20,
    zIndex: 10,
  },
  render: (args) => ({
    components: {
      Modal,
    },
    setup() {
      const action = () => {
        console.log('button pressed!')
      }
      const onClose = () => {
        args.visible = false
      }
      return { args, action, onClose }
    },
    template: `
      <div>
        <button @click="args.visible=true" type="button">SHOW MODAL</button>
        <Modal
          :filter-background="args.filterBackground"
          :has-close="args.hasClose"
          :visible="args.visible"
          :panel="args.panel"
          :gutter="args.gutter"
          :z-index="args.zIndex"
          @close="onClose"
        >
          <button @click="action">button</button><br />
          <a href="/">link</a>
        </Modal>
      </div>
  `,
  }),
}

export const Scroll: Story = {
  name: 'scroll',
  args: {
    filterBackground: 'rgba(0, 48, 137, 0.14)',
    hasClose: true,
    visible: false,
    panel: true,
    gutter: 20,
    zIndex: 10,
  },
  render: (args) => ({
    components: {
      Modal,
    },
    setup() {
      const action = () => {
        console.log('button pressed!')
      }
      const onClose = () => {
        args.visible = false
      }
      return { args, action, onClose, longTextHtml: 'scroll<br />'.repeat(50) }
    },
    template: `
      <div>
        <button @click="args.visible=true" type="button">SHOW MODAL</button>
        <Modal
          :filter-background="args.filterBackground"
          :has-close="args.hasClose"
          :visible="args.visible"
          :panel="args.panel"
          :gutter="args.gutter"
          :z-index="args.zIndex"
          @close="onClose"
        >
          <span v-html="longTextHtml"></span>
        </Modal>
      </div>
  `,
  }),
}
