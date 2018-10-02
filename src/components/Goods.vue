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
    <scroll :probe-type="3" class="foods-wrapper" ref="foodsWrapper" :data="foods">
      <ul>
        <li @click="selectFood(food, $event)" v-for="(food, index) in foods" :key="index" class="food-item" :class="{ nomore: !food.nomore }">
          <div class="icon">
            <img :src="food.icon" alt="">
            <div class="mask" v-if="!food.nomore">缺货</div>
          </div>
          <div class="content">
            <h2 class="name">{{food.name}}</h2>
            <div class="count">月售{{food.sellCount}}份</div>
            <div class="price">￥{{food.price}}</div>
            <div class="cartcontrol-wrapper">
              <cart-control :food="food" :disabled="!food.nomore"></cart-control>
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
      this.$refs.foodsWrapper.scroll.scrollTo(0, 0)
    },
    selectFood({ id }) {
      this.$router.push({ path: '/food', query: {id}})
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
      padding: 20px 32px 20px 20px;
      .icon {
        position: relative;
        width:168px;
        height:168px;
        border-radius:8px;
        margin-right: 30px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          line-height: 168px;
          text-align: center;
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          font-size: 28px;
          font-weight: 300;
        }
      }
      .content {
        position: relative;
        flex: 1;
        .name {
          font-size:36px;
          font-weight:400;
          color:rgba(53,53,53,1);
        }
        .count {
          font-size:22px;
          font-weight:300;
          color:rgba(153,153,153,1);
          margin: 18px 0 56px 0;
        }
        .price {
          font-size:36px;
          font-weight:500;
          color:rgba(255,120,89,1);
        }  
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 0;
        }
      }
      &.nomore .content {
        .name, .count, .price {
          color: #e5e5e5;
        }
      }
    }
  }
}  
</style>
