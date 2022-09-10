<template>
  <div class="cart-item">
    <div class="select">
      <input type="checkbox" v-model="goodsItem.checked" />
      <img src="~@/assets/img/cart/tick.svg" alt="" :class="{ checked: goodsItem.checked }" />
    </div>
    <div class="picture">
      <img :src="goodsItem.img" alt="" />
    </div>
    <div class="info">
      <h5 class="title">{{ goodsItem.title }}</h5>
      <p class="desc">{{ goodsItem.desc }}</p>
      <div class="amount">
        <span class="price left">¥{{ goodsItem.price }}</span>
        <span class="count right">x{{ goodsItem.count }}</span>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    changeStatus() {
      this.goodsItem.checked = !this.goodsItem.checked
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  height: 130px;
  padding: 6px;
  border-bottom: 2px solid #eee;
}

.select {
  position: relative;
  overflow: hidden;
  width: 22px;
  text-align: center;
}

.select input {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 22px;
  height: 22px;
}

.select img {
  width: 100%;
  border: 2px solid #ccc;
  vertical-align: bottom;
  border-radius: 50%;
}

.select .checked {
  border: 2px solid var(--color-high-text);
  background-color: var(--color-high-text);
}

.picture {
  width: 24%;
  text-align: center;
}

.picture img {
  width: 90%;
  height: 100px;
  border-radius: 8px;
  vertical-align: middle;
}

.info {
  width: 70%;
  padding: 0 5px;
  line-height: 1.5;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px 0 8px;
  font-size: 14px;
}

.price {
  color: var(--color-high-text);
  font-weight: 700;
  font-size: 18px;
}

.count {
  margin-right: 16px;
  color: #666;
}
</style>
