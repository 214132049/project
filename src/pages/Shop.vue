<template>
  <div class="shop-page">
    <header class="header">
      <div class="status">
        <img class="icon" src="@/assets/images/ic-house-sel@2x.png">
        正常营业
      </div>
      <div class="shop-name">
        <p class="name">A餐厅</p>
        <div class="rate-count">
          <star :value="3" style="display: inline-block"/>
          <span class="count">月售2836单</span>
        </div>
      </div>
    </header>
    <div class="time-box">
      <div
        class="time"
        :class="{ active: time == index }"
        v-for="(item, index) in ['早餐', '午餐', '晚餐']"
        :key="index"
        @click="selTime(index)"
        >
        {{ item }}
        <span class="bar"></span>
      </div>
      <div class="week" @click="showDays = !showDays">
        <span class="line"></span>
        <span class="day">
          <span v-show="selDay == today">今日({{ days[selDay] }})</span>
          <span v-show="selDay != today">{{ days[selDay] }}</span>
        </span>
        <i class="icon" :class="{ fold: showDays }"></i>
      </div>
      <ul class="days" v-show="showDays">
        <li v-for="(day, index) in days" :key="index" :class="{ active: selDay == index }" @click="setDay(index)">
          <span class="name">{{ day }}</span>
          <span class="icon"></span>
        </li>
      </ul>
    </div>
    <goods :goods="goods" @add-food="addFood"></goods>
    <shop-cart
      ref="shopcart"
      :select-foods="selectFoods"
      :delivery-price="0"
      :min-price="0"></shop-cart>
  </div>
</template>
<script>
export default {
  name: 'Shop',
  data() {
    let today = new Date().getDay()
    today = today == 0 ? 6 : today - 1

    let goods = new Array(20).fill(1).map((item, index) => {
      return {
        name: ['三文字', '六个文字文字'][index%2],
        foods: new Array(3).fill({})
      }
    })

    return {
      time: 0,
      selDay: today,
      today,
      days: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      showDays: false,
      goods
    }
  },
  computed: {
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
  methods: {
    selTime(time) {
      this.time = time
    },
    setDay(day) {
      this.selDay = day
      this.showDays = false
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
  }
}
</script>

<style lang="less" scoped>
  .shop-page {
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 100%;
    overflow: hidden;
    .header {
      position: relative;
      height: 206px;
      background: #d4e8fa;
      .status {
        position: absolute;
        top: 0;
        right: 32px;
        width: 142px;
        height: 42px;
        border-radius: 0 0 16px 16px;
        background: #EAFFFF;
        line-height: 42px;
        text-align: center;
        color: #38C7C4;
        font-size: 24px;
        .icon {
          width: 22px;
          height: 22px;
          margin-right: 4px;
        }
      }
      .shop-name {
        position: absolute;
        top: 40px;
        left: 34px;
        width:390px;
        height:134px;
        text-align: center;
        background:rgba(255,255,255,1);
        border-radius:8px;
        box-shadow:0px 0px 8px rgba(0,0,0,0.06);
        .name {
          font-size: 34px;
          color: #333;
          margin: 20px 0 30px 0;
        }
        .count {
          font-size: 24px;
          margin-left: 20px;
        }
      }
    }
    .time-box {
      position: relative;
      display: flex;
      height: 88px;
      line-height: 88px;
      margin-top: 9px;
      background: #fff;
      padding: 0 32px;
      border-bottom: 1px solid @border-color; /* no */ 
      &>div {
        font-size: 30px;
        &.time {
          flex: 1;
          position: relative;
          color: #999;
          .bar {
            position: absolute;
            display: block;
            bottom: 0;
            left: 6px;
            width: 46px;
            height: 6px;
            background: #fff;
          }
          &.active {
            color: #FF7859;
            .bar {
              background: #FF7859;
            }
          }
        }
        &.week {
          width: 234px;
          color: #333;
          text-align: center;
          .line {
            display: inline-block;
            width: 1px;
            height: 30px;
            margin-right: 21px;
            vertical-align: middle;
            border-left: 1px solid #c2c2c2; /* no */ 
          }
          .day {
            display: inline-block;
            width: 140px;
            text-align: center;
            font-size: 30px;
          }
          .icon {
            display: inline-block;
            width: 26px;
            height: 14px;
            margin-left: 18px;
            background: url('~@/assets/images/ic-unfold@2x.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%;
            &.fold {
              background-image: url('~@/assets/images/ic-fold@2x.png');
            }
          }
        }
      }
      .days {
        position: absolute;
        top: 89px;
        left: 0;
        width: 100%;
        height: 2000px;
        z-index: 200;
        background-color: rgba(0, 0, 0, 0.3);
        li {
          display: flex;
          justify-content:space-between;
          align-items: center;
          height: 86px;
          padding: 0 32px;
          border-bottom: 1px solid @border-color; /* no */ 
          background: #fff;
          font-size: 30px;
          color: #999;
          .icon {
            display: inline-block;
            width: 30px;
            height: 22px;
          }
          &.active {
            color: #38C7C4;
            .icon {
              background: url('~@/assets/images/ic-right@2x.png') no-repeat center;
              background-size: 100%;
            }
          }
        }
      }
    }
    .goods {
      flex: 1;
    }
    .shop-cart {
      height: 90px;
    }
  }
</style>
