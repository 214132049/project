<template>
  <div class="rate_component" :class="[ size ]">
    <i
      class="single-star"
      :class="{ active: index < value }"
      v-for="(item, index) in max_value"
      @click="setPoint(index)"
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
    },
    size: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      max_value: 5
    }
  },
  methods: {
    setPoint (index) {
      this.$emit('input', index + 1)
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
    &.large {
      .single-star {
        width: 50px;
        height: 46px;
        margin-right: 48px;
      }
    }
  }
</style>
