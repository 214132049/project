<template>
  <transition name="fade">
    <div class="toast" v-show="isVisible" id="toast">
      {{ txt }}
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Toast',
  data() {
    return {
      isVisible: false,
      timer: null,
      txt: ''
    }
  },
  methods: {
    show() {
      this.isVisible = true
      this.clearTimer()
      this.$nextTick(() => {
        this.timer = setTimeout(() => {
          this.hide()
        }, 3000)
      })
    },
    hide() {
      this.isVisible = false
      this.clearTimer()
    },
    clearTimer() {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
}
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 10px;
  font-size: 32px;
  padding: 30px 50px;
  max-width: 400px;
  white-space: nowrap;
  transform: translate3d(-50%, -50%, 0);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
