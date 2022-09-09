<template>
  <div>
    <swiper>
      <swiperItem v-for="item in banners" :key="item.link">
        <a :href="item.link">
          <img :src="item.image" alt="" v-on:load="swiperLoad">
        </a>
      </swiperItem>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js'

export default {
  name: 'HomeSwiper',
  data() {
    return {
      isloadFinish: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperLoad() {
      if (!this.isloadFinish) {
        this.$emit('swiperLoad')
        this.isloadFinish = true
      }
    }
  }
}
</script>

<style>
</style>