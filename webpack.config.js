const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname + '/src/plugin.js'),
  output: {
    filename: 'lapras-frontend.min.js',
    libraryTarget: 'window',
    library: 'LaprasFrontend'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  externals: {
    'vue': 'Vue'
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      'Vue': 'vue'
    })
  ]
}
