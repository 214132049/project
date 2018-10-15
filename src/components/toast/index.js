import toast from './toast'
import Vue from 'vue'

let Toast = Vue.extend(toast);
let instance = new Toast().$mount();

let Service = function (content, cb) {
  if (typeof content !== 'string') {
    return
  }
  if (!document.querySelector("#toast")) {
    document.body.appendChild(instance.$el)
  }
  instance.cb = cb;
  instance.txt = content;
  instance.show();
}

export default Service