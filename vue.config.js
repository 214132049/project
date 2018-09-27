// vue.config.js
const { getLessVariables } = require('./src/util')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        globalVars: getLessVariables('src/assets/styles/variables.less')
      }
    }
  },
  chainWebpack: () => {
  }
}