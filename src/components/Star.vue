<template>
  <div class="rate_component">
    <i
      class="single-star"
      :class="{ active: index < value }"
      v-for="(item, index) in max_value"
      :key="index">
    </i>
  </div>
</template>
<script>
export default {
  name: 'Star',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      max_value: 5
    }
  }
}
</script>
<style lang="less" scoped>
  .rate_component {
    .single-star {
      display: inline-block;
      width: 30px;
      height: 28px;
      margin-right: 14px;
      background-image: url('~@/assets/images/ic-star@2x.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      &:last-child {
        margin-right: 0;
      }
      &.active {
        background-image: url('~@/assets/images/ic-star-sel@2x.png');
      }
    }
  }
</style>
