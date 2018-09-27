<template>
  <ul class="nav-bar_component">
    <router-link tag="li" :to="item.path" v-for="(item, index) in navConfig" :key="index">
      <img class="icon" :src="$route.path === item.path ? item.icon_sel : item.icon"/>
      <div>{{ item.text }}</div>
    </router-link>
  </ul>
</template>
<script>
import NavConfig from '../nav.config'

export default {
  name: 'NavBar',
  data() {
    return {
      navConfig: NavConfig
    }
  }
}
</script>

<style lang="less" scoped>
  .nav-bar_component {
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 98px;
    background: #fff;
    text-align: center;
    border-top: 1px solid @border-color;
    font-size: 22px;
    li {
      flex: 1;
    }
    .icon {
      display: inline-block;
      width: 40px;
      height: 40px;
      margin-top: 16px;
    }
    .router-link-active, .router-link-exact-active {
      color: #38C7C4;
    }
  }
</style>
