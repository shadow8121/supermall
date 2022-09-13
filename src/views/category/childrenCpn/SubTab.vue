<template>
  <div class="sub-tab">
    <a :href="subTab.link">
      <img v-lazy="subTab.img" alt="" />
      <p class="title">{{ subTab.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SubTab',
  data() {
    return {}
  },
  props: {
    subTab: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.sub-tab {
  width: calc(100% / 3);
  height: 96px;
  padding-top: 12px;
  text-align: center;
  color: #222;
}

.sub-tab a {
  display: block;
}

.sub-tab img {
  width: 60%;
}

.title {
  padding-top: 4px;
  font-size: 12px;
}
</style>
