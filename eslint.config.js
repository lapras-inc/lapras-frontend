// @ts-check
const eslint = require('@eslint/js');
const pluginVue = require('eslint-plugin-vue');
const tsEslint = require('typescript-eslint');
const vueParser = require('vue-eslint-parser');
const prettierConfig = require("eslint-plugin-prettier/recommended");
const globals = require('globals');

module.exports = [
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  prettierConfig,
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2020,
        parser: tsEslint.parser,
        extraFileExtensions: [".vue"],
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
      globals: { ...globals.browser }
    },
  },
  {
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'vue/require-explicit-emits': 'error',
      'vue/multi-word-component-names': 'off',
    },
  },
];
