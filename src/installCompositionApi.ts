import Vue from 'vue'
import VueCompositionAPI from 'vue-demi'

// [vue-composition-api] must call Vue.use(plugin) before using any function.というエラーの対応
// 読み込んだ Vue に Composition API が追加されていない場合は追加する
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(Vue as any)['__composition_api_installed__']) {
  Vue.use(VueCompositionAPI)
}
