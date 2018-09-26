// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].template = 'src/index.tmp.html'
        return args
      })
  }
}