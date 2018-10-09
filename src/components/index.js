import Loading from './loading'
import Toast from './toast'
import CartControl from './cart-control'
import Goods from './goods'
import TabBar from './tab-bar'
import PartTitle from './part-title'
import Scroll from './scroll'
import ShopCart from './shop-cart'
import ShopItem from './shop-item'
import Star from './star'
import CuButton from './cu-button'
import DispatchUserInfo from './dispatch-user-info'
import DispatchFoodInfo from './dispatch-food-info'
import LoadMore from './load-more'


const components = [
  CartControl,
  Goods,
  TabBar,
  PartTitle,
  Scroll,
  ShopCart,
  ShopItem,
  Star,
  CuButton,
  DispatchUserInfo,
  DispatchFoodInfo,
  LoadMore
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$loading = Loading;
  Vue.prototype.$toast = Toast;
}

export default {
  install
}