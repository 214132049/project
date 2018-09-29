<template>
  <div class="goods">
    <scroll class="menu-wrapper" ref="MenuWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item" :class="{'current':currentIndex===index}"
          @click="selectMenu(index,$event)" :key="index">
          <span class="text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </scroll>
    <scroll :probe-type="3" class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="food-list food-list-hook" :key="index">
          <ul>
            <li @click="selectFood(food,$event)" v-for="food in item.foods" :key="food.name" class="food-item">
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cart-control @add="addFood" :food="food"></cart-control>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </scroll>
    <shop-cart ref="shopcart" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shop-cart>
    <!-- <food @add="addFood" :food="selectedFood" ref="food"></food> -->
  </div>
</template>    

<script>
import BScroll from "better-scroll";

const ERR_OK = 0;
export default {
  name: 'Goods',
  props: {
    seller: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      goods: new Array(20).fill({name: '文本文本文本文本', type: 'special', foods: new Array(20).fill({})}),
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach(good => {
        good.foods.forEach(food => {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  },
  methods: {
    selectFood(food, event) {
      if (!event._constructed) {
        return;
      }
      this.selectedFood = food;
      this.$refs.food.show();
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    },
    addFood(target) {
      this._drop(target);
    },
    _drop(target) {
      // 体验优化,异步执行下落动画
      this.$nextTick(() => {
        this.$refs.shopcart.drop(target);
      });
    },
    _initScroll() {
      this.menuScroll = this.$refs.MenuWrapper.scroll
      this.foodsScroll = this.$refs.foodsWrapper.scroll
      this.foodsScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      // 获取每一个区间的高度，保存到数组中,使用dom方法，food-list-hook方便js选择每一个li的高度
      let foodList = this.$refs.foodsWrapper.getElementsByClassName(
        "food-list-hook"
      );
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  position: absolute;
  top: 304px;
  bottom: 98px;
  width: 100%;
  height: 816px;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 176px;
    width: 176px;
    background: #F3F6F9;
    .menu-item {
      display: table;
      width: 176px;
      padding: 30px 0px;
      line-height: 42px;
      color: #333;
      &.current {
        position: relative;
        z-index: 10;
        background: #fff;
        font-weight: 700;
      }    
      .text {
        display: table-cell;
        vertical-align: middle;
        width: 110px;
        font-size: 28px;
      }
    }  
  }     
  .foods-wrapper {
    flex: 1;
    .food-item {
      display: flex;
      margin: 18px;
      padding: 18px;
      &:last-child {
        margin-bottom: 0;
      }
      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }
      .content {
        flex: 1;
        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }
        .desc, .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
        .desc {
          margin-bottom: 8px;
          line-height: 12px;
        }
        .extra {
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: 24px;
          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }  
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}  
</style>
