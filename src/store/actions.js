export default {
  cartPrecheck({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      const oldGoods = state.cartList.find(item => item.id === payload.id)
      if (oldGoods) {
        const index = state.cartList.indexOf(oldGoods)
        commit('increaseCount', index)
        resolve('当前商品数量 +1')
      } else {
        commit('addToCart', payload)
        resolve('加入购物车成功')
      }
    })
  }
}
