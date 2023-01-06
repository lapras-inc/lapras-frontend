import { storiesOf } from '@storybook/vue3'
import iconMap from './iconMap'
import Icon from './Icon.vue'

const story = storiesOf('Icon/icons', module)

Object.keys(iconMap).forEach((name) => {
  story.add(name, () => ({
    template: `<span style="font-size: 50px;"><Icon name="${name}" /></span>`,
    components: { Icon },
    parameters: {
      layout: 'centered',
    },
  }))
})
