<template>
  <div class="info">
    <div class="avatar">
      <img src="~@/assets/img/profile/avatar.svg" alt="" />
    </div>
    <div class="options">
      <span class="sign-up"><a href="javascript:;">登录</a></span>
      <span class="login"><a href="javascript:;">注册</a></span>
      <div class="cell-phone-no"><img src="~@/assets/img/profile/phone.svg" alt="" />暂未绑定手机号</div>
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
.info {
  display: flex;
  padding: 5px 20px;
  background-color: var(--color-tint);
  color: #fff;
}

.avatar {
  flex: 2;
}

.avatar img {
  width: 100%;
  border-radius: 50%;
}

.options {
  flex: 7;
  position: relative;
  padding: 10px 10px;
}
.options span {
  margin: 0 8px;
}
.options span a {
  color: #fff;
}

.options::after {
  content: '>';
  display: block;
  position: absolute;
  right: 0px;
  top: 25%;
  color: #fff;
  font-size: 25px;
}
.cell-phone-no {
  padding-top: 5px;
  font-size: 12px;
}

.cell-phone-no img {
  width: 18px;
  height: 28px;
  vertical-align: middle;
}
</style>
