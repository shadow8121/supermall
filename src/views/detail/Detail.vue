<template>
  <div class="detail">
    <detail-nav-bar :tabs="['商品', '参数', '评论', '推荐']" :currentSettle="currentSettle" v-on:settleSwitch="settleSwitch" />
    <scroll ref="bs" class="bs" :probeType="3" v-on:contentScroll="contentScroll">
      <detail-swiper :swiperImgs="swiperImgs" />
      <goods-desc :goodsInfo="goodsInfo" />
      <shop-desc :shopInfo="shopInfo" />
      <show-desc :showInfo="showInfo" v-on:imgLoad="imgLoad" />
      <params-desc ref="paramsDesc" :paramsInfo="paramsInfo" />
      <comment-info ref="commentDesc" :commentInfo="commentInfo" />
      <recommend ref="recommend" :recommend="recommend.list" />
    </scroll>
    <back-top v-on:click.native="backTop" v-show="isShowBackTop" />
    <bottom-bar v-on:addToCart="addTCart" />
  </div>
</template>

<script>
// 防抖
import { debounce } from '@/common/utils'

// 滚动
import Scroll from '@/components/content/scroll/Scroll'

// 网络请求
import { getGoodsDatil, getRecommend, GoodsInfo, ShopInfo, GoodsParam } from '@/network/detail'

// 混合
import mixin from '@/common/mixin'

// vuex actions 方法映射
import { mapActions } from 'vuex'

// 子组件
import { DetailNavBar, DetailSwiper, GoodsDesc, ShopDesc, ShowDesc, ParamsDesc, CommentInfo, Recommend, BottomBar } from './childrenCpn'

export default {
  name: 'Detail',

  mixins: [mixin],

  data() {
    return {
      currentSettle: 0,
      swiperImgs: [],
      goodsInfo: {},
      shopInfo: {},
      paramsInfo: {},
      showInfo: {},
      commentInfo: {},
      recommend: {},
      refresh: null,
      tabsSettle: [0],
      settleRecord: null
    }
  },

  components: {
    DetailNavBar,
    DetailSwiper,
    GoodsDesc,
    ShopDesc,
    ShowDesc,
    ParamsDesc,
    CommentInfo,
    Recommend,
    Scroll,
    BottomBar
  },

  methods: {
    ...mapActions(['cartPrecheck']),
    // 图片加载时刷新 scrollerHeight 并更新每个 tabs 的 offsetTop
    imgLoad() {
      this.refresh()
      this.settleRecord()
    },

    // 监测滚动
    contentScroll(position) {
      // backIcon 是否显示
      this.isShowBackTop = -position.y >= 1000
      // tabs 的样式随着滚动变换
      let y = -position.y
      if (0 <= y && y < this.tabsSettle[1]) {
        this.currentSettle = 0
      } else if (y >= this.tabsSettle[1] && y < this.tabsSettle[2]) {
        this.currentSettle = 1
      } else if (y >= this.tabsSettle[2] && y < this.tabsSettle[3]) {
        this.currentSettle = 2
      } else if (y > this.tabsSettle[3]) {
        this.currentSettle = 3
      }
    },

    // tabs 切换
    settleSwitch(index) {
      this.currentSettle = index
      this.$refs.bs.scrollTo(0, -this.tabsSettle[index], 0)
    },

    // 加入购物车
    addTCart() {
      const goods = {}
      goods.id = this.goodsInfo.id
      goods.title = this.goodsInfo.title
      goods.desc = this.goodsInfo.desc
      goods.price = this.goodsInfo.realPrice
      goods.img = this.swiperImgs[0]
      goods.count = 1
      goods.checked = true
      this.cartPrecheck(goods).then(res => {
        this.$toast.show(res, 1500)
      })
    }
  },

  created() {
    // 获取商品详细参数
    getGoodsDatil(this.$route.params.id).then(res => {
      // 轮播图
      this.swiperImgs = res.result.itemInfo.topImages
      // 商品基础信息
      this.goodsInfo = new GoodsInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
      // 店铺信息
      this.shopInfo = new ShopInfo(res.result.shopInfo)
      // 商品穿着效果
      this.showInfo = res.result.detailInfo
      // 商品尺码信息
      this.paramsInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)
      // 评论数据
      if (res.result.rate.list) this.commentInfo = res.result.rate.list[0]
    })

    // 获取推荐商品
    getRecommend().then(res => {
      this.recommend = res.data
    })
  },

  mounted() {
    // 检测图片加载时刷新 BScroll 的 scrollerHeight
    this.refresh = debounce(this.$refs.bs.refresh, 100)

    // 记录顶部 tabs 对应内容的 offsetTop
    this.settleRecord = debounce(() => {
      this.tabsSettle = [0]
      this.tabsSettle.push(this.$refs.paramsDesc.$el.offsetTop)
      this.tabsSettle.push(this.$refs.commentDesc.$el.offsetTop)
      this.tabsSettle.push(this.$refs.recommend.$el.offsetTop)
    }, 500)
  }
}
</script>

<style scoped>
.detail {
  height: 100vh;
}
</style>
