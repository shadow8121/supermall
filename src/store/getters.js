export default {
  selectCount(state) {
    return state.cartList.reduce((preValue, item) => preValue + item.checked, 0)
  },
  cartList(state) {
    return state.cartList
  }
}
