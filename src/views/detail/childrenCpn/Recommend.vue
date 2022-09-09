<template>
  <div class="recommend">
    <goods-list :goods="recommend" />
  </div>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList'
import GoodsListItem from '@/components/content/goods/GoodsListItem'

export default {
  name: 'Recommend',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsList,
    GoodsListItem
  }
}
</script>

<style scoped>
.recommend {
  padding: 6px 2px;
  border-top: 6px solid #eee;
}
</style>