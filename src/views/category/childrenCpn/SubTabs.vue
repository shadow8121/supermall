<template>
  <div class="sub-tabs">
    <div class="wrapper">
      <sub-tab v-for="(item, index) in subTabs" :subTab="item" :key="index" />
    </div>
  </div>
</template>

<script>
import SubTab from './SubTab'

export default {
  name: 'SubTabs',
  data() {
    return {}
  },
  props: {
    subTabs: {
      default() {
        return []
      }
    }
  },
  components: {
    SubTab
  },
  methods: {}
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
