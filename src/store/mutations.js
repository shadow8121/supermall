export default {
  addToCart(state, payload) {
    state.cartList.push(payload)
  },
  increaseCount(state, payload) {
    state.cartList[payload].count++
  }
}
