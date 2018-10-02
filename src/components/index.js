import Loading from './loading'
import CartControl from './cart-control'
import Goods from './goods'
import TabBar from './tab-bar'
import PartTitle from './part-title'
import Scroll from './scroll'
import ShopCart from './shop-cart'
import ShopItem from './shop-item'
import Star from './star'
import CuButton from './cu-button'


const components = [
  CartControl,
  Goods,
  TabBar,
  PartTitle,
  Scroll,
  ShopCart,
  ShopItem,
  Star,
  CuButton
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