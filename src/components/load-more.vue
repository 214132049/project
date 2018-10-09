<template>
  <div class="loading-tips">
    <transition name="fade" mode="out-in">
      <span v-show="showLoading">加载中...</span>
    </transition>
    <span v-if="showEnd">没有更多了</span>
  </div>
</template>
<script>
export default {
  name: 'LoadMore',
  props: {
    showEnd: {
      type: Boolean,
      default: false
    },
    showLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.loading-tips {
  text-align: center;
  height: 40px;
  font-size: 30px;
  color: #999;
  .fade-enter-active, .fade-leave-active {
    animation: fade 1s infinite; 
  }
  .fade-enter, .fade-leave-to {
    animation: none;
  }
  @keyframes fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
