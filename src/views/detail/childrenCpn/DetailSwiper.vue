<template>
  <div>
    <swiper>
      <swiper-item v-for="item in swiperImgs" :key="item">
        <img :src="item" alt="" class="img" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: 'DetailSwiper',
  props: {
    swiperImgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  created() {}
}
</script>

<style scoped>
.img {
  height: 360px;
}
</style>
