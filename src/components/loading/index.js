import Loading from './loading'
import Vue from 'vue'

let LoadingTip = Vue.extend(Loading)
let Service = {}

Service.show = () => {
  if (document.querySelector('#loading')) return
  let tpl = new LoadingTip().$mount().$el
  document.body.appendChild(tpl)
}

Service.hide = () => {
  let tpl = document.querySelector('#loading')
  document.body.removeChild(tpl)
}

export default Service