module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../../src/**/*.stories.mdx', '../../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false,
              },
            ],
          ],
        },
      },
    },
    '@storybook/addon-links',
  ],
}
