<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  background-color: #f7f7f7;
  box-shadow: -1px 0 1px rgba(0, 0, 0, .1);
}
</style>