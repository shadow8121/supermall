<template>
  <div class="home">
    <nav-bar class="nav-home" color="#fff">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <tab-control ref="tabControlDouble" :titles="['流行', '新款', '精选']" v-on:tabClick="tabClick" v-show="isShowTabControlDouble" class="sticky" />
    <scroll ref="bs" :probeType="3" :pullUpLoad="true" :click="true" v-on:contentScroll="contentScroll" v-on:fetchData="fetchData">
      <home-swiper :banners="banner" v-on:swiperLoad="getTabOffsetTop" />
      <recommend :recommends="recommend" />
      <feature v-on:featureLoad="getTabOffsetTop" />
      <tab-control ref="tabControl" :titles="['流行', '新款', '精选']" v-on:tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top v-on:click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 导航栏
import NavBar from 'components/common/navbar/NavBar'

// 子组件
import { HomeSwiper, TabControl, Recommend, Feature } from './childrenCpn'
import GoodsList from 'components/content/goods/GoodsList.vue'

import Scroll from 'components/content/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

// axios 请求数据
import { getHomeMultiData, getHomeGoods } from 'network/home'

// 防抖函数
import { debounce } from '@/common/utils'

export default {
  name: 'Home',
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      offsetDebounce: null,
      isShowTabControlDouble: false,
      leaveY: 0
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    /* 方法处理相关 */
    tabClick(index) {
      if (this.isShowTabControlDouble) {
        this.$refs.bs.scrollTo(0, -this.tabOffsetTop, 0)
      }
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl.currentIndex = this.$refs.tabControlDouble.currentIndex = index
    },
    backTop() {
      this.$refs.bs.scrollTo(0, 0, 300)
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000
      this.isShowTabControlDouble = -position.y >= this.tabOffsetTop
    },
    fetchData() {
      this.getHomeGoods(this.currentType)
    },
    // 获取 tab-control 的 offsetTop
    getTabOffsetTop() {
      this.offsetDebounce()
    },

    /* 网络请求相关 */
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = page
      })
    }
  },
  created() {
    // 获取数据
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 为获取 tab-control 的 offset 做防抖
    this.offsetDebounce = debounce(() => {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }, 500)
    // 图片加载完成后刷新 better-scroll 可滚动高度
    let refresh = debounce(this.$refs.bs.refresh, 100)
    this.$bus.$on('goodsLoad', () => {
      refresh()
    })
  },
  deactivated() {
    this.leaveY = this.$refs.bs.scrollY
  },
  activated() {
    this.$refs.bs.refresh()
    this.$refs.bs.scrollTo(0, this.leaveY, 0)
  }
}
</script>

<style scoped>
.nav-home {
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0;
  right: 0;
}

.sticky {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
