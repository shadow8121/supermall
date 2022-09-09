<template>
  <div class="goods-item" @click="goodsDetail">
    <img v-lazy="getImg" alt="" v-on:load="goodsLoad" />
    <div class="description">
      <p class="title">{{ item.title }}</p>
      <div>
        <span class="price">{{ item.price }}</span>
        <span class="favorite">{{ item.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodsLoad() {
      this.$bus.$emit('goodsLoad')
    },
    goodsDetail() {
      this.$router.push('/detail/' + this.item.iid)
    }
  },
  computed: {
    getImg() {
      return this.item.image || this.item.show.img
    }
  }
}
</script>

<style scoped>
.goods-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  margin-bottom: 8px;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.description {
  padding: 8px 5px;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
}

.description .title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.description .price {
  color: var(--color-high-text);
  margin-right: 12px;
}

.description div .favorite::before {
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 3px;
  background: url(assets/img/common/collect.svg) 0 0/14px 14px;
  vertical-align: text-bottom;
}
</style>
