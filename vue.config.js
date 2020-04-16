module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/stylesheets";',
      },
    },
  },
}
