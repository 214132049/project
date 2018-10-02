<template>
  <div class="button" :class="classObj">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'CuButton',
  props: {
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObj () {
      return {
        [this.type]: true,
        [this.size]: true
      }
    }
  }
}
</script>
<style lang="less" scoped>
.button {
  display: inline-block;
  width:188px;
  height: 70px;
  border:1px solid #38C7C4; /* no */
  color: #38C7C4;
  line-height: 70px;
  text-align: center;
  border-radius:10px;
  font-size: 32px;
  &.primary {
    background: #38C7C4;
    color: #fff;
  }
  &.cancel {
    border:1px solid #999; /* no */
    color: #333;
  }
  &.large {
    width: 100%;
    height:80px;
    line-height: 80px;
    font-size: 36px;
  }
  &.small {
    height: 60px;
    font-size: 30px;
    line-height: 60px;
  }
}
</style>
