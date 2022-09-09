<template>
  <div class="goods-desc">
    <h5 class="title">{{ goodsInfo.title }}</h5>
    <div class="price">
      <strong :style="{ color: goodsInfo.discountBgColor }">{{ goodsInfo.newPrice }}</strong><del>{{ goodsInfo.oldPrice
      }}</del><span v-show="goodsInfo.discount" class="mark"
        :style="{ backgroundColor: goodsInfo.discountBgColor }">{{ goodsInfo.discount
        }}</span>
    </div>
    <div class="data">
      <span v-for="item in goodsInfo.columns">{{ item }}</span>
    </div>
    <div class="feature">
      <span v-for="item in goodsInfo.services"><img :src="item.icon" alt=""> {{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDesc',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-desc {
  padding: 5px;
}

.price {
  margin: 8px 0 12px;
}

.price strong {
  font-size: 22px;
  font-weight: 400;
}

.price del {
  margin: 0 8px;
  color: #999;
  font-size: 10px;
}

.price .mark {
  padding: 2px 4px;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  vertical-align: super;
}

.data {
  display: flex;
  justify-content: space-around;
  padding: 5px;
  color: #999;
  font-size: 12px;
  border-bottom: 1px solid #eee;
}

.feature {
  display: flex;
  justify-content: space-around;
  margin: 14px 0;
  text-align: center;
  font-size: 12px;
}

.feature img {
  width: 12px;
  vertical-align: bottom;
}
</style>