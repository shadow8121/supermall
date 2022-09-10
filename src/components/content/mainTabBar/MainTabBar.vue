<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="" />
        <p slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="" />
        <p slot="item-text">分类</p>
      </tab-bar-item>
      <tab-bar-item path="/shopCart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="" />
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="" />
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
.main-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
