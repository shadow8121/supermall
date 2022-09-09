<template>
  <div>
    <nav-bar class="nav-bar" color="#fff">
      <div slot="center">购物车（{{ this.$store.state.cartList.length }}）</div>
    </nav-bar>
    <scroll ref="bs" :subHeight="137" :click="true">
      <cart-item v-for="item in this.$store.state.cartList" :goodsItem="item" :key="item.id" />
    </scroll>
    <bottom-bar />
  </div>
</template>

<script>
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
  activated() {
    this.$refs.bs.bs.refresh()
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-high-text);
}
</style>
