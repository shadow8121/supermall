<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  padding: 10px 0 15px;
  border-bottom: 8px solid #eee;
  text-align: center;
  font-size: 12px;
}

.recommend img {
  width: 68px;
  height: 68px;
  margin-bottom: 8px;
}
</style>