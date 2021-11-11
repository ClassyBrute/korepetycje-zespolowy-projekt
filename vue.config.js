module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },
  devServer: {
    proxy: 'http://78.8.98.73:3000'
  },
  transpileDependencies: [
    'quasar'
  ],
}
