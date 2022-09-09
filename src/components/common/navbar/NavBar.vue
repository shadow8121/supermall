<template>
  <div class="nav-bar" :style="{ color: color }">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    color: {
      type: String,
      default: 'var(--color-text)'
    }
  }
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  box-shadow: 1px 0 1px rgba(0, 0, 0, 0.2)
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>