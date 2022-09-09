<template>
  <div class="bottom-bar">
    <div class="options">
      <div class="service">
        <span></span>
        <p>客服</p>
      </div>
      <div class="shop">
        <span></span>
        <p>店铺</p>
      </div>
      <div class="favorite">
        <span></span>
        <p>收藏</p>
      </div>
    </div>
    <div class="operation">
      <span v-on:click="addToCart">加入购物车</span>
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  text-align: center;
  width: 100%;
  height: 49px;
  background-color: #fff;
}

.options {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.options {
  font-size: 13px;
}

.options span {
  width: 28px;
  height: 30px;
  background: url('~@/assets/img/detail/detail_bottom.png') no-repeat;
  background-size: 22px;
}

.service,
.shop,
.favorite {
  display: flex;
  flex-direction: column;
}

.service span {
  background-position: 3px -48px;
}

.shop span {
  background-position: 3px -94px;
}

.favorite span {
  background-position: 3px 5px;
}

.operation {
  flex: 1;
  line-height: 49px;
}

.operation span:nth-child(1) {
  display: inline-block;
  width: 60%;
  background-color: #fce851;
  color: #333;
}

.operation span:nth-child(2) {
  display: inline-block;
  width: 40%;
  background-color: var(--color-high-text);
  color: #fff;
}
</style>
