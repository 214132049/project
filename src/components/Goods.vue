<template>
  <div class="goods">
    <scroll class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods"
          class="menu-item"
          :class="{'current':currentIndex === index}"
          @click="selectMenu(index, $event)" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </scroll>
    <scroll :probe-type="3" class="foods-wrapper">
      <ul>
        <li @click="selectFood(food, $event)" v-for="food in foods" :key="food.name" class="food-item">
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
      currentIndex: 0
    }
  },
  computed: {
    foods() {
      return this.goods[this.currentIndex].foods
    }
  },
  methods: {
    selectMenu(index) {
      this.currentIndex = index
    },
    selectFood({ id }) {
      this.router.push({ path: '/food', query: {id}})
    },
    addFood(food) {
      this.$emit('addFood', food)
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
