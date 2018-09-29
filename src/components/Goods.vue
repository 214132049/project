<template>
  <div class="goods">
    <scroll class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item" :class="{'current':currentIndex === index}"
          @click="selectMenu(index, $event)" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </scroll>
    <scroll :probe-type="3" class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="food-list food-list-hook" :key="index">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectFood(food, $event)" v-for="food in item.foods" :key="food.name" class="food-item">
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
  </div>
</template>    

<script>
export default {
  name: 'Goods',
  props: {
    goods: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      listHeight: [],
      scrollY: 0,
      selectedFood: {},
      foodList: null
    };
  },
  computed: {
    currentIndex() {
      let listHeight = this.listHeight
      for (let i = 0; i < listHeight.length; i++) {
        let height1 = listHeight[i];
        let height2 = listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.foodList = document.querySelectorAll('.food-list-hook');
      this.foodsScroll = this.$refs.foodsWrapper.scroll
      this.foodsScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
      this._calculateHeight()
    })
  },
  methods: {
    selectFood(food, event) {
      if (!event._constructed) {
        return;
      }
      this.selectedFood = food;
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let el = this.foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
    },
    addFood(target) {
      this.$emit('addFood', target)
    },
    _calculateHeight() {
      // 获取每一个区间的高度，保存到数组中,使用dom方法，food-list-hook方便js选择每一个li的高度
      let height = 0;
      let foodList = [].slice.call(this.foodList)
      this.listHeight = [height].concat(foodList.map(food => height += food.clientHeight))
    }
  }
};
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    width: 176px;
    background: #F3F6F9;
    .menu-item {
      width: 100%;
      padding: 30px;
      line-height: 32px;
      color: #333;
      font-size: 28px;
      box-sizing: border-box;
      &.current {
        background: #fff;
      }    
    }  
  }     
  .foods-wrapper {
    flex: 1;
    .title {
      padding-left: 28px;
      height: 52px;
      line-height: 52px;
      border-left: 2px solid #d9dde1;
      font-size: 24px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
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
