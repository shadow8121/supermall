<template>
  <div ref="bsWrapper" class="bs-wrapper" :style="{ height: viewHeight - this.subHeight + 'px' }">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ObserveImage from '@better-scroll/observe-image'

export default {
  name: 'Scroll',
  data() {
    return {
      bs: null,
      viewHeight: window.innerHeight
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    click: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: true
    },
    subHeight: {
      type: Number,
      default: 93
    }
  },
  computed: {
    scrollY() {
      return this.bs.y
    }
  },
  methods: {
    scrollTo(x, y, delay) {
      this.bs.scrollTo(x, y, delay)
    },
    refresh() {
      this.bs.refresh()
    }
  },
  mounted() {
    BScroll.use(ObserveImage)

    this.bs = new BScroll(this.$refs.bsWrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: this.click,
      observeImage: true
    })

    if (this.probeType === 2 || this.probeType === 3) {
      this.bs.on('scroll', position => {
        this.$emit('contentScroll', position)
      })
    }

    if (this.pullUpLoad) {
      this.bs.on('pullingUp', () => {
        this.$emit('fetchData')
        this.bs.finishPullUp()
      })
    }

    window.addEventListener('resize', () => {
      this.viewHeight = window.innerHeight
      this.bs.refresh()
    })
  }
}
</script>

<style scoped>
.bs-wrapper {
  position: relative;
  z-index: 0;
  width: 100%;
  margin-top: 44px;
}

.content {
  width: 100%;
  position: absolute;
  z-index: -1;
}
</style>
