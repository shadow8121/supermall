<template>
  <div class="toast" v-show="isShow">
    <div class="content">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message, duration) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3px 8px;
  background-color: var(--color-tint);
  color: #fff;
  border-radius: 9px;
}
</style>
