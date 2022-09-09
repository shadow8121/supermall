<template>
  <div class="show-info">
    <div class="desc">{{ showInfo.desc }}</div>
    <div class="effect" v-for="itemx in showInfo.detailImage">
      <p>{{ itemx.key }}</p>
      <div v-for="itemy in itemx.list">
        <img :src="itemy" alt="" v-on:load="imgLoad" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ShowDesc',
  props: {
    showInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.show-info {
  padding: 3px;
  margin-top: 18px;
}

.desc {
  position: relative;
  padding: 8px;
  font-size: 14px;
}

.desc::before,
.desc::after {
  position: absolute;
  content: '';
  display: block;
  width: 120px;
  height: 6px;
}

.desc::before {
  top: -6px;
  left: 0;
  border-left: 6px solid #ccc;
  border-top: 1px solid #ccc;
}

.desc::after {
  bottom: 0;
  right: 0;
  border-right: 6px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.effect p {
  padding: 12px;
  color: #222;
}


.effect img {
  width: 100%;
}
</style>