import Loading from '@/components/Loading'

let LoadingPlugin = {}
// 避免重复install，设立flag
LoadingPlugin.installed = false
LoadingPlugin.install = function (Vue) {
  if (LoadingPlugin.installed) return
  Vue.prototype.$loading = {}
  Vue.prototype.$loading.show = () => {
    // 如果页面有loading则不继续执行
    if (document.querySelector('#loading')) return
    // 2、创建实例，挂载到文档以后的地方
    let LoadingTip = Vue.extend(Loading)
    let tpl = new LoadingTip().$mount().$el
    // 3、把创建的实例添加到body中
    document.body.appendChild(tpl)
    LoadingPlugin.installed = true
  }
  Vue.prototype.$loading.hide = () => {
    let tpl = document.querySelector('#loading')
    document.body.removeChild(tpl)
  }
}
export default LoadingPlugin