<template>
  <div class="button" :class="[type,size,{'disabled': disabled}]" @click="handleClick">
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>
<style lang="less" scoped>
.button {
  display: inline-block;
  width:248px;
  height: 70px;
  color: #38C7C4;
  line-height: 70px;
  text-align: center;
  border-radius:10px;
  font-size: 32px;
  border:1px solid #38C7C4; /* no */
  &.primary {
    background: #38C7C4;
    color: #fff;
  }
  &.cancel {
    border: 1px solid #999; /* no */
    color: #333;
  }
  &.large {
    width: 100%;
    height:80px;
    line-height: 80px;
    font-size: 36px;
  }
  &.small {
    width:188px;
    height: 60px;
    font-size: 30px;
    line-height: 60px;
  }
  &.disabled {
    background: #e5e5e5;
    color: #999;
    border: 1px solid #e5e5e5; /* no */
  }
}
</style>
