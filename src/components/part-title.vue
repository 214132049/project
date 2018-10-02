<template>
  <div class="part-title_component">
    <span class="line"></span>
    <span class="content"><slot></slot></span>
    <span class="line"></span>
  </div>
</template>
<script>
export default {
  name: 'PartTitle'
}
</script>

<style lang="less" scoped>
  .part-title_component {
    height: 80px;
    width: 686px;
    line-height: 80px;
    text-align: center;
    font-size:30px;
    color: #999;
    font-weight:400;
    margin: 0 auto;
    .content {
      margin: 0 32px;
      vertical-align: middle;
    }
    .line {
      display: inline-block;
      height: 1px;
      width: 50px;
      background: #999;
      vertical-align: middle;
    }
  }
</style>
