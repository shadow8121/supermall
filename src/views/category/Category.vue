<template>
  <div class="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <wall-tabs class="left" :tabs="tabs" v-on:tabsClick="tabsClick" />
    <scroll ref="bs" class="bs right" :click="true">
      <sub-tabs :subTabs="subTabs[settle]" v-if="isGetData" />
      <items :items="items[settle]" v-if="isGetData" />
    </scroll>
  </div>
</template>

<script>
// 数据请求
import { getTabs, getSubTabs, getItems, SubTab, Item } from '@/network/category'

// 滚动
import Scroll from '@/components/content/scroll/Scroll'

// 子组件
import { NavBar, WallTabs, SubTabs, Items } from './childrenCpn'

export default {
  name: 'Category',
  data() {
    return {
      settle: 0,
      tabs: [],
      // subTabs 的结构为：tabs 的下为 key，每个 key 的 value 为 []
      subTabs: {},
      // items 的结构设计为：tabs 的下标为 key，每个 key 对应的 value 为 { pop: [], new: [], sell: [] }
      items: {},
      isGetData: false
    }
  },
  components: {
    NavBar,
    WallTabs,
    SubTabs,
    Scroll,
    Items
  },
  methods: {
    tabsClick(index) {
      this.settle = index
      if (!this.items[index]) {
        this.isGetData = false
        this.getSubTabsWrap(this.settle)
        this.getItemsWrap(this.settle)
        this.$refs.bs.scrollTo(0, 0, 0)
      }
    },
    // 对 subTabs 数据的请求的保存进行封装
    getSubTabsWrap(index) {
      let item = []
      getSubTabs(this.tabs[index].maitKey).then(res => {
        res.data.list.forEach(element => {
          item.push(new SubTab(element))
        })
        this.subTabs[index] = item
      })
    },
    // 对 items 数据的请求的保存进行封装
    getItemsWrap(index) {
      let counter = 0
      let item = { pop: [], new: [], sell: [] }
      Object.keys(item).forEach(key => {
        getItems(this.tabs[index].miniWallkey, key).then(res => {
          let tempItem = []
          res.forEach(element => {
            tempItem.push(new Item(element))
          })
          item[key] = tempItem
          this.items[index] = item
          if (++counter === Object.keys(item).length) {
            this.isGetData = true
          }
        })
      })
    }
  },
  created() {
    // 页面创建时，请求 tabs 和第一个 tab 对应的 subTabs 和 item
    getTabs().then(res => {
      new Promise(resolve => {
        this.tabs = res.data.category.list
        resolve()
      }).then(() => {
        this.getItemsWrap(0)
        this.getSubTabsWrap(0)
      })
    })
  },
  activated() {
    this.$refs.bs.refresh()
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
}

.bs {
  width: 80%;
}

.view {
  display: flex;
}
</style>
