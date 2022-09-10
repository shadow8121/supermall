<template>
  <div class="bottom-bar">
    <div class="operation left">
      <div class="select left" v-on:click="checkAll"><img src="~@/assets/img/cart/tick.svg" alt="" :class="{ checked: isCheckAll }" /> 全选</div>
      <div class="total left">
        合计：<span>¥{{ total }}</span>
      </div>
    </div>
    <span class="settlement right" v-on:click="settlement">去结算({{ selectCount }})</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BottomBar',
  computed: {
    ...mapGetters(['selectCount']),
    total() {
      return this.$store.state.cartList
        .filter(item => item.checked)
        .reduce((preValue, item) => preValue + item.price * item.count, 0)
        .toFixed(2)
    },
    isCheckAll() {
      return this.$store.state.cartList.length !== 0 && !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkAll() {
      let status = this.isCheckAll
      this.$store.state.cartList.forEach(item => {
        item.checked = !status
      })
    },
    settlement() {
      if (!this.selectCount) {
        this.$toast.show('还未选择任何商品哦！', 1500)
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  z-index: 1;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 44px;
  background-color: #fff;
}

.operation {
  width: 75%;
  height: 100%;
  padding: 11px 6px;
}

.select {
  overflow: hidden;
  margin-right: 28px;
  line-height: 22px;
}

.select img {
  width: 22px;
  height: 22px;
  border: 2px solid #ccc;
  border-radius: 50%;
  vertical-align: bottom;
}

.select .checked {
  border: 2px solid var(--color-high-text);
  background-color: var(--color-high-text);
}

.total {
  line-height: 23px;
}

.total span {
  color: var(--color-high-text);
}

.settlement {
  width: 25%;
  background-color: var(--color-high-text);
  text-align: center;
  line-height: 44px;
  color: #fff;
}
</style>
