module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/stylesheets";',
      },
    },
  },
}
