import BackTop from '@/components/content/backTop/BackTop'

export default {
  data() {
    return {
      isShowBackTop: false
    }
  },
  components: {
    BackTop
  },
  methods: {
    backTop() {
      this.$refs.bs.scrollTo(0, 0, 500)
    }
  }
}
