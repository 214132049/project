<template>
  <div class="dispatch-user-info">
    <div class="user-info" @click="selectAddress">
      <template v-if="info.isPack == 1">
        <p class="name flex">
          {{ info.address }}
          <i class="icon" v-if="ordering"></i>
        </p>
        <p class="address">
          <span :class="{ 'user-name': info.status }">{{ userName }}</span>
          <span v-if="!ordering && info.unitName">（{{ info.unitName }}）</span>
          <span class="tel">{{ info.phone }}</span>
        </p>
      </template>
      <template v-else>
        <p class="name">
          {{ userName }}
          <span class="tel">{{ phone }}</span>
        </p>
        <p class="address">
          <span>{{ info.unitName }}</span>
        </p>
      </template>
    </div>
    <div class="time-box">
      <span>{{ !ordering ? '取' : '用' }}餐时间</span>
      <span class="time">{{ info.takeTime }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DispatchUserInfo',
  props: {
    ordering: {
      type: Boolean,
      default: false
    },
    info: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    userName() {
      return this.info.name || this.info.person
    },
    phone() {
      return this.info.telephone || this.info.phone
    }
  },
  methods: {
    selectAddress () {
      if (!this.ordering || !this.info.isPack) return
      let local = JSON.parse(window.localStorage.getItem('localAddress')) || {}
      let address = local[this.$store.state.userInfo.id] || []
      if (address.length == 0) {
        this.$router.push({ path: '/add-address' })
        return
      }
      this.$router.push({ path: '/select-address' })
    }
  }
}
</script>

<style lang="less" scoped>
.dispatch-user-info {
  background: #fff;
  .user-info {
    padding: 32px 30px;
    .name {
      font-size:34px;
      color: #333;
      line-height: 1.3;
      &.flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .icon {
        float: right;
        width: 14px;
        height: 26px;
        margin-left: 10px;
        background: url('~@/assets/images/order-ic-right@2x.png') no-repeat center;
        background-size: 100%;
      }
    }
    .address {
      color: #999;
      margin-top: 20px;
      font-size: 30px;
      .user-name {
        color: #333;
      }
    }
    .tel {
      margin-left: 20px;
    }
  }
  .time-box {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    height: 98px;
    line-height: 98px;
    font-size: 34px;
    color: #333;
    border-top: 1px solid @border-color; /* no */
    .time {
      color: #38C7C4;
      font-size: 30px;
    }
  }
}
</style>
