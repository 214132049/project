// vue.config.js
const path = require('path')

module.exports = {
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