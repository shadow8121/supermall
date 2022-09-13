<template>
  <div>
    <nav-bar class="nav-bar" color="#fff">
      <div slot="center">购物车（{{ cartList.length }}）</div>
    </nav-bar>
    <scroll ref="bs" :subHeight="137" :click="true">
      <cart-item v-for="item in cartList" :goodsItem="item" :key="item.id" />
      <div class="empty" v-show="!cartList.length">
        <img src="~@/assets/img/cart/emptyCart.png" alt="" />
        <p>您的购物车空空哒～</p>
      </div>
    </scroll>

    <bottom-bar />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Scroll from '@/components/content/scroll/Scroll'
import NavBar from '@/components/common/navbar/NavBar'

import { CartItem, BottomBar } from './childrenCpn'

export default {
  name: 'ShopCart',
  components: {
    Scroll,
    NavBar,
    CartItem,
    BottomBar
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.bs.bs.refresh()
  }
}
</script>

<style scoped>
.nav-bar {
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0;
  right: 0;
  background-color: var(--color-high-text);
}

.empty img {
  width: 100%;
}

.empty p {
  text-align: center;
  color: var(--color-high-text);
}
</style>
