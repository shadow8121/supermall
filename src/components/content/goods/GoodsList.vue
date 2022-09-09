<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :item="item" :key="item.link" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}
</style>