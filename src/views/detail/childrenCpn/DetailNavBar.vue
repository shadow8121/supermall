<template>
  <nav-bar>
    <div slot="left" @click="back" class="back"><strong>&lt;</strong></div>
    <div slot="center" class="tabs">
      <span v-for="(tab, index) in tabs" v-on:click="tabSwitch(index)" :class="{ active: index == currentSettle }">{{
          tab
      }}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

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
.tabs {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
}

.active {
  color: var(--color-high-text)
}
</style>