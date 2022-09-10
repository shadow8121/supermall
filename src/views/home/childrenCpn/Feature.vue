<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/feature_bg.jpg" alt="" v-on:load="featureLoad" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  methods: {
    featureLoad() {
      this.$emit('featureLoad')
    }
  }
}
</script>

<style scoped>
.feature {
  border-bottom: 6px solid #eee;
}
.feature a {
  display: block;
}

.feature img {
  width: 100%;
}
</style>
