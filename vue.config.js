// vue.config.js
const path = require('path')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/order/' : '/',
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/variables.less')
      ],
      preProcessor: 'less'
    }
  },
  chainWebpack: () => {
  }
}