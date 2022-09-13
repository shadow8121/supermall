<template>
  <div class="cards">
    <div class="balance">
      <div class="number"><span>99.99</span>元</div>
      <p class="description">我的余额</p>
    </div>
    <div class="sep"></div>
    <div class="counpons">
      <div class="number"><span>99</span>个</div>
      <p class="description">我的优惠</p>
    </div>
    <div class="sep"></div>
    <div class="integral">
      <div class="number"><span>∞</span>分</div>
      <p class="description">我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-around;
  border-bottom: 12px solid #eee;
  text-align: center;
}

.cards > div {
  padding: 18px 0;
}

.number span {
  color: var(--color-high-text);
  font-weight: 700;
  font-size: 22px;
}

.cards .sep {
  border-left: 1px solid #eee;
}

.cards .description {
  font-size: 14px;
}
</style>
