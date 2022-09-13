<template>
  <div class="items">
    <tab-control :titles="['综合', '新品', '销量']" v-on:tabClick="tabClick" />
    <goods-list :goods="items[currentType]"></goods-list>
  </div>
</template>

<script>
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

export default {
  name: 'Items',
  data() {
    return {
      currentType: 'pop'
    }
  },
  props: {
    items: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    TabControl,
    GoodsList
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    }
  }
}
</script>

<style scoped></style>
