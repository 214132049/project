import Loading from './Loading'
import CartControl from './CartControl'
import Goods from './Goods'
import TabBar from './TabBar'
import PartTitle from './PartTitle'
import Scroll from './Scroll'
import ShopCart from './ShopCart'
import ShopItem from './ShopItem'
import Star from './Star'


const components = [
  CartControl,
  Goods,
  TabBar,
  PartTitle,
  Scroll,
  ShopCart,
  ShopItem,
  Star
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$loading = Loading;
}

export default {
  install
}