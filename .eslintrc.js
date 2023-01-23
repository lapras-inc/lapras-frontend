module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-explicit-emits': 'error',
    // Vue3化時に有効化する
    'vue/no-deprecated-destroyed-lifecycle': 'off'
  },
  // # Storybookのビルド時に生成される一時ファイル
  ignorePatterns: ['generated-stories-entry.js'],
}
