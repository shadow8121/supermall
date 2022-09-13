<template>
  <div class="services">
    <div class="item">
      <img src="@/assets/img/profile/message.svg" alt="" />
      <div class="description">我的消息</div>
    </div>
    <div class="item">
      <img src="@/assets/img/profile/pointer.svg" alt="" />
      <div class="description">积分商城</div>
    </div>
    <div class="item">
      <img src="@/assets/img/profile/vip.svg" alt="" />
      <div class="description">会员卡</div>
    </div>
    <div class="item">
      <img src="@/assets/img/profile/cart.svg" alt="" />
      <div class="description">我的购物车</div>
    </div>
    <div class="item">
      <img src="@/assets/img/profile/shopping.svg" alt="" />
      <div class="description">下载购物APP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.item:nth-child(3n) {
  border-bottom: 12px solid #eee;
}
.item img {
  float: left;
  width: 20px;
  height: 20px;
  margin: 9px;
}
.description {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  margin-left: 40px;
  font-size: 16px;
}

.item:nth-of-type(3n) .description,
.item:nth-last-of-type(1) .description {
  border: 0;
}
</style>
