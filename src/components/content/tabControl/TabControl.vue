<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" :class="{ active: index === currentIndex }" v-on:click="btnClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  padding: 4px 0;
  background-color: #fff;
  line-height: 26px;
  font-size: 15px;
}

.tab-control span {
  padding: 0 5px;
}

.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>
