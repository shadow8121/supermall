<template>
  <div class="tab-bar-item" v-on:click="active">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {}
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'var(--color-high-text)'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    active() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  text-align: center;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>