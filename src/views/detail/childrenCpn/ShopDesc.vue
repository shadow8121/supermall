<template>
  <div class="shop-info">
    <div class="logo">
      <h5><img :src="shopInfo.logo" alt=""> {{ shopInfo.name }}</h5>
    </div>
    <div class="data">
      <div class="amount">
        <div class="sell">
          <span>{{ (shopInfo.cSells / 10000).toFixed(2) + '万' }}</span>
          <p>总销量</p>
        </div>
        <div class="count">
          <span>{{ shopInfo.cGoods }}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="sep"></div>
      <div class="appraise">
        <p v-for="item in shopInfo.score">
          <span>{{ item.name }}</span>
          <span :class="{ high: item.isBetter }">{{ item.score }}</span>
          <span v-if="item.isBetter" style="background-color: red;">高</span>
          <span v-else>低</span>
        </p>
      </div>
    </div>
    <div class="into">
      <a :href="shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shop-info {
  padding: 10px 0;
  border-top: 6px solid #eee;
  border-bottom: 6px solid #eee;
}

.logo {
  padding: 5px;
}

.logo img {
  width: 42px;
  margin: 0 8px 0 5px;
  vertical-align: middle;
  border-radius: 3px;
}

.logo h5 {
  font-size: 18px;
}

.data {
  display: flex;
  justify-content: space-around;
}

.amount {
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin: 12px 6px;
  text-align: center;
}

.amount p {
  line-height: 22px;
  font-size: 14px;
  margin: 0 10px;
}

.sep {
  border: .5px solid #eee;
}

.appraise {
  margin: 0 18px;
  line-height: 22px;
  font-size: 14px;
}

.appraise span:nth-child(2) {
  display: inline-block;
  width: 28px;
  margin: 0 8px;
  color: green;
}

.appraise span:nth-child(3) {
  background-color: green;
  color: #fff;
}

.data .appraise .high {
  color: red;
}

.into {
  width: 120px;
  margin: 16px auto;
  background-color: #f1f4fa;
  text-align: center;
  line-height: 26px;
  border-radius: 5px;
}
</style>