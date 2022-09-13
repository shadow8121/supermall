<template>
  <div class="wall-tabs">
    <scroll ref="bs" :click="true">
      <div class="tab" v-for="(item, index) in tabs" :class="{ active: index === settle }" v-on:click="tabsClick(index)" :key="index">{{ item.title }}</div>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/content/scroll/Scroll'

export default {
  name: 'WallTabs',
  data() {
    return {
      settle: 0
    }
  },
  props: {
    tabs: {
      type: Array,
      defaut() {
        return []
      }
    }
  },
  components: { Scroll },
  methods: {
    tabsClick(index) {
      this.settle = index
      this.$emit('tabsClick', index)
    }
  },
  activated() {
    this.$refs.bs.refresh()
  },
  updated() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.$refs.bs.refresh()
      }, 300)
    })
  }
}
</script>

<style scoped>
.wall-tabs {
  width: 20%;
  background-color: #f6f6f6;
}
.tab {
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
}

.active {
  border-left: 3px solid var(--color-high-text);
  background-color: #fff;
}
</style>
