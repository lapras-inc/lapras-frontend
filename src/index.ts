import {VueConstructor} from 'vue'

module.exports = {
  install: function(Vue: VueConstructor) {
    Vue.component('Card', require('@components/Card/Card'))
  },
}
