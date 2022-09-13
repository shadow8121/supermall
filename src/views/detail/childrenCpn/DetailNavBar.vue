<template>
  <div class="detail-nav-bar">
    <nav-bar color="var(--color-text)" bgColor="#fff">
      <div slot="left" @click="back" class="back"><strong>&lt;</strong></div>
      <div slot="center" class="tabs">
        <span v-for="(tab, index) in tabs" v-on:click="tabSwitch(index)" :class="{ active: index == currentSettle }">{{ tab }}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'DetailNavBar',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    },
    currentSettle: {
      type: Number,
      default: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    tabSwitch(index) {
      this.$emit('settleSwitch', index)
    },
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.detail-nav-bar {
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0;
  right: 0;
}

.back {
  font-size: 20px;
  line-height: 40px;
}
.tabs {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
}

.active {
  color: var(--color-high-text);
}
</style>
